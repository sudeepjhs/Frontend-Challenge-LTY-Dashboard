import React, { HTMLAttributes } from 'react'
import { GoArrowUp } from 'react-icons/go'
interface GrowthIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
    percentage: number,
    iconSize?: number,
    fontSize?: string
}

const GrowthIndicator: React.FC<GrowthIndicatorProps> = ({ percentage, iconSize, fontSize, className, ...props }) => {
    return (
        <span className={"text-secondary flex items-center " + className}>
            <GoArrowUp size={iconSize || 20} />
            <span className={fontSize}>{percentage}%</span>
        </span>
    )
}

export default GrowthIndicator