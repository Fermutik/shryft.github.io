/**
 * PhoneInput.tsx
 *
 * This component provides a masked input for a phone number using shadcn's Input component
 * and @react-input/mask. The mask is set to the Ukrainian phone format: "+380(99)999-99-99".
 * The fixed country code (+380) is automatically inserted, so the user only fills in the remaining digits.
 */

import React from 'react';
import { InputMask } from '@react-input/mask';
import { Input } from '@/components/ui/input';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, ...rest }) => {
    // Log the current phone value for debugging purposes
    console.log("PhoneInput value:", value);

    return (
        <InputMask<typeof Input>
            component={Input}             // Using shadcn's Input component for styling and behavior
            mask="+380(__)___-__-__"        // Mask pattern for Ukrainian phone numbers
            replacement={{ _: /\d/ }}             // Character to show empty positions
            value={value}
            onChange={onChange}
            {...rest}
        />
    );
};

export default PhoneInput;
