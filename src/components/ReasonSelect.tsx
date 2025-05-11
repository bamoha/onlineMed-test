import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
  } from "@/components/ui/select";
  import { Label } from "@/components/ui/label";
  
  interface ReasonSelectProps {
    value: string;
    onChange: (val: string) => void;
    options: string[];
  }
  
  export function ReasonSelect({ value, onChange, options }: ReasonSelectProps) {
    return (
      <div className="space-y-2 w-full">
        <Label htmlFor="reason" className="text-gray-600">
          Reason
        </Label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="border focus:border-primary-custom-blue-focus focus:ring-2 focus:ring-primary-custom-blue-focus w-full bg-white">
            <SelectValue placeholder="Select reason" />
          </SelectTrigger>
          <SelectContent className="rounded-lg shadow-md">
            {options.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
            <SelectItem
              value="Other Reason"
              className="px-3 py-2 text-sm text-blue-600 cursor-pointer"
            >
              + Other Reason
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }