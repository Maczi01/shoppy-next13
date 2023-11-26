import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from "@/lib/utils";

const linkVariants = cva('', {
    variants: {
        indent: {
            base: '',
            outline: '',
        },
    },
    defaultVariants: {
        indent: 'base',
    },
});

// interface ExtendedLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps, VariantProps<typeof linkVariants> {}

interface ExtendedLinkProps extends ComponentPropsWithoutRef<typeof NextLink>, VariantProps<typeof linkVariants> {}

const Link = forwardRef<HTMLAnchorElement, ExtendedLinkProps>(({ className, indent, ...restProps }: ExtendedLinkProps, ref) => {
    return <NextLink ref={ref} className={cn(linkVariants({ indent, className }))} {...restProps} />;
});

Link.displayName = "Link";

export {Link};