import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './Tab.module.scss';

const activeTabStyles = cva(styles['active-tab'], {
    variants: {
        theme: {
            primary: [
                styles['active']
            ],
            secondary: [
                styles['active']
            ],
            alternative: [
                styles['active']
            ]
        }
    }
})

const tabStyles = cva(styles['tab'], {
    variants: {
        theme: {
            primary: [
                styles['tab-primary']
            ],
            secondary: [
                styles['tab-secondary']
            ],
            alternative: [
                styles['tab-alternative']
            ]
        },
        disabled: {
            true: [
                styles['tab-disabled']
            ]
        }
    }
});

type TabStyleProps = Omit<VariantProps<typeof tabStyles>, 'disabled'>;

export interface ITabProps extends React.ComponentPropsWithRef<'button'>, TabStyleProps {
    activeTabIndex?: number;
    currentTabIndex?: number;
}

const Tab = forwardRef(({ children, className, disabled, theme = 'primary', currentTabIndex, activeTabIndex = 0, ...tabRestProps }: ITabProps, ref?: React.ForwardedRef<HTMLButtonElement>) => {
    return (
        <button 
            ref={ref} 
            {...tabRestProps} 
            className={`${tabStyles({ disabled, theme})} ${activeTabStyles({ theme: currentTabIndex === activeTabIndex ? theme : null })} ${className}`}
        >
            {children}
        </button>
    );
})

export { Tab };