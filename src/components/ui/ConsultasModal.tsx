import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { IconClose } from '../icons'

// TODO: Reemplaza con tu Access Key de Web3Forms → https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'd744f3f9-aad9-4b04-8fb4-97bade1502e3'

interface ConsultasModalProps {
  open: boolean
  onClose: () => void
}

const inputClass =
  'w-full rounded-2 border border-cloud bg-transparent px-[clamp(12px,calc(var(--band)*0.0070588235),16.48px)] py-[clamp(10px,calc(var(--band)*0.0058823529),13.72px)] font-regular text-ebony placeholder:text-emperor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud'

const labelClass =
  'text-[clamp(11px,calc(var(--band)*0.0064705882),15.18px)] font-semibold text-mineshaft'

export function ConsultasModal({ open, onClose }: ConsultasModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<'success' | 'error' | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!open) return

    const previousActive = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousActive?.focus()
    }
  }, [open, onClose])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setResult(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setResult('success')
        form.reset()
      } else {
        setResult('error')
        setErrorMsg(data.message || 'Ocurrió un error al enviar.')
      }
    } catch {
      setResult('error')
      setErrorMsg('Error de conexión. Intenta nuevamente.')
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="consultas-dialog"
          className="fixed inset-0 z-[60] flex items-center justify-center p-[clamp(16px,calc(var(--band)*0.0141176471),33.12px)]"
          role="dialog"
          aria-modal="true"
          aria-label="Formulario de consultas"
        >
          <motion.div
            className="absolute inset-0 bg-ebony/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="relative flex w-full max-w-[clamp(480px,calc(var(--band)*0.3529411765),822.4px)] flex-col overflow-hidden bg-white shadow-fab outline-none"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-[clamp(10px,calc(var(--band)*0.0094117647),22.08px)] top-[clamp(10px,calc(var(--band)*0.0094117647),22.08px)] flex size-[clamp(24px,calc(var(--band)*0.0211764706),49.68px)] items-center justify-center rounded-99 bg-ebony-39"
            >
              <IconClose width={14} height={14} />
            </button>

            <div className="px-[clamp(24px,calc(var(--band)*0.0141176471),33.12px)] pt-[clamp(28px,calc(var(--band)*0.0164705882),38.64px)] pb-[clamp(20px,calc(var(--band)*0.0117647059),27.6px)]">
              <h2 className="text-[clamp(18px,calc(var(--band)*0.0105882353),24.84px)] font-extrabold uppercase tracking-[clamp(0.48px,calc(var(--band)*0.0002823529),0.662px)] text-mineshaft">
                Consultas
              </h2>
              <div className="mt-[clamp(10px,calc(var(--band)*0.0058823529),13.72px)] border-t-3 border-cloud" />
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-[clamp(12px,calc(var(--band)*0.0070588235),16.48px)] overflow-y-auto px-[clamp(24px,calc(var(--band)*0.0141176471),33.12px)] pb-[clamp(28px,calc(var(--band)*0.0164705882),38.64px)]"
            >
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="consultas-name" className={labelClass}>Nombres y Apellidos</label>
                <input id="consultas-name" type="text" name="name" required placeholder="Ej: Juan Pérez García" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="consultas-phone" className={labelClass}>Número de teléfono</label>
                <input id="consultas-phone" type="tel" name="phone" required placeholder="Ej: +51 941 439 233" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="consultas-email" className={labelClass}>Correo electrónico</label>
                <input id="consultas-email" type="email" name="email" required placeholder="Ej: tucorreo@ejemplo.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="consultas-subject" className={labelClass}>Asunto</label>
                <input id="consultas-subject" type="text" name="subject" required placeholder="Ej: Consulta sobre servicios" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="consultas-message" className={labelClass}>Mensaje</label>
                <textarea id="consultas-message" name="message" required rows={4} placeholder="Escriba su mensaje aquí..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-[clamp(4px,calc(var(--band)*0.0023529412),5.49px)] self-start rounded-2 bg-cloud px-[clamp(20px,calc(var(--band)*0.0117647059),27.6px)] py-[clamp(10px,calc(var(--band)*0.0058823529),13.72px)] font-bold uppercase tracking-[clamp(1.6px,calc(var(--band)*0.0009411765),2.208px)] text-ebony whitespace-nowrap shadow-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud disabled:opacity-60"
              >
                {sending ? 'Enviando...' : 'Enviar'}
              </button>

              {result === 'success' && (
                <p className="text-[clamp(12px,calc(var(--band)*0.0070588235),16.48px)] font-semibold text-mineshaft">
                  ¡Tu consulta fue enviada correctamente! Te contactaremos pronto.
                </p>
              )}
              {result === 'error' && (
                <p className="text-[clamp(12px,calc(var(--band)*0.0070588235),16.48px)] font-semibold text-red-500">
                  {errorMsg}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
