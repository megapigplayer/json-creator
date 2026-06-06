import React from "react";

interface FieldWrapperProps {
  label: string;
  description?: string;
  required?: boolean;
  depth?: number;
  children: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  description,
  required,
  depth = 0,
  children,
}) => {
  return (
    <div
      className="field-wrapper"
      style={{ animationDelay: `${depth * 30}ms` }}
    >
      <label className="field-label">
        <span className="field-label-text">{label}</span>
        {required && <span className="field-required">*</span>}
      </label>
      {description && <p className="field-description">{description}</p>}
      {children}
    </div>
  );
};
