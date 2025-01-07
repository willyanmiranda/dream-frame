const FormField = ({ label, ...props }: { label: string; [key: string]: any }) => (
    <div className="flex flex-col items-start w-full gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      {props.as === "select" ? (
        <select
          {...props}
          className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-10 w-full px-4 text-white cursor-pointer"
        />
      ) : (
        <input
          {...props}
          className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-11 w-full px-4 text-white placeholder-white"
        />
      )}
    </div>
);

export default FormField;
  