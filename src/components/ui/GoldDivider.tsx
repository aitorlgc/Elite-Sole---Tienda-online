import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
}

export default function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center justify-center py-2', className)}>
      <div className="h-px w-32 bg-gradient-to-r from-transparent to-gold/60" />
      <div className="mx-4 flex items-center gap-1.5">
        <div className="h-1 w-1 rotate-45 bg-gold/60" />
        <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <div className="h-1 w-1 rotate-45 bg-gold/60" />
      </div>
      <div className="h-px w-32 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}
