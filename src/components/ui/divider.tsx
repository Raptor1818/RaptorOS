import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const dividerVariants = cva(
  'h-px', // base styles go here as the first argument
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
      },
      margin: {
        default: 'my-4',
        top: 'mt-4',
        bottom: 'mb-4',
      }
    },
    defaultVariants: {
      variant: 'default',
      color: 'default',
      margin: 'default',
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
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(dividerVariants({ variant, color, margin }), className)}
      {...props}
    />
  )
}