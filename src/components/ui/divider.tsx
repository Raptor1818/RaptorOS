import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const dividerVariants = cva(
  'h-px',
  {
    variants: {
      variant: {
        default: 'w-full',
        half: 'w-1/2',
        quarter: 'w-1/4',
        vertical: 'h-full w-px',
      },
      color: {
        default: 'bg-border',
        muted: 'bg-muted',
        accent: 'bg-accent',
        destructive: 'bg-destructive',
        ghost: 'bg-transparent'
      },
      margin: {
        default: 'my-4',
        top: 'mt-4',
        bottom: 'mb-4',
      },
      size: {
        default: 'h-px',
        md: 'h-0.5',
        lg: 'h-1',
        xl: 'h-2',
      }
    },
    defaultVariants: {
      variant: 'default',
      color: 'default',
      margin: 'default',
      size: 'default',
    },
  }
)

export interface DividerProps extends
  VariantProps<typeof dividerVariants> {
  className?: string;
}

export default function Divider({
  className,
  variant,
  color,
  margin,
  size,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(dividerVariants({ variant, color, margin, size }), className)}
      {...props}
    />
  )
}