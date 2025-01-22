import React from "react";

type FormFieldProps = {
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
};

export default function FormField({ label, type, value, onChange, placeholder, error }: FormFieldProps) {
    return (
        <fieldset className="flex flex-col gap-2">
            <label className="text-gray-300">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`h-auto w-full rounded-lg border-2 ${
                    error ? "border-red-500" : "border-gray-600"
                } bg-gray-900/95 p-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder={placeholder}
            />
            {error && <span className="text-red-500">{error}</span>}
        </fieldset>
    );
}