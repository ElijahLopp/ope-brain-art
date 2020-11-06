export interface InputSearchProps {
  placeholderText: string;
  debounceInterval?: number;

  onSearch: (text: string) => void;
}
