import { CubeTransparentIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";

type TextInputAutoCompleteOptionsProps = {
  opcoes: string[];
  filterOpcoes?: boolean;
  currentText?: string;
  isOpen: boolean;
  closeSyncState: () => void;
  onSelection: (selection: string) => void;
};

export function TextInputAutoCompleteOptions(
  props: TextInputAutoCompleteOptionsProps,
) {
  let filteredOptions = props.opcoes;

  if (
    props.filterOpcoes !== undefined &&
    props.currentText !== undefined &&
    props.filterOpcoes
  ) {
    filteredOptions = filteredOptions.filter((option) =>
      option
        .toLowerCase()
        .includes((props.currentText as string).toLowerCase()),
    );
  }

  function handleOptionSelect(option: string) {
    props.onSelection(option);
    if (!open) props.closeSyncState();
  }

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "-10px" }}
          transition={{ ease: "easeInOut" }}
          className="border bg-white rounded-md py-4 px-3 pt-2 space-y-2 absolute z-10 w-full max-w-xs shadow-sm max-h-[200px] overflow-y-scroll"
        >
          <XMarkIcon
            className="z-20 w-6 h-6 text-red-500/60 absolute top-2 right-2 ease-in-out duration-200 transition-all hover:cursor-pointer hover:scale-110 hover:text-red-500/100"
            onClick={() => props.closeSyncState()}
          />
          <ul className="tracking-normal">
            {filteredOptions.length < 1 ? (
              <i className="text-sm text-default-500">Sem correspondência</i>
            ) : (
              filteredOptions.map((nome, index) => (
                <li
                  key={index}
                  className="py-1.5 pl-1.5 rounded-md inline-flex w-full gap-2.5 ease-soft-spring duration-150 transition-all hover:translate-x-0.5 hover:bg-indigo-100/30 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
                  onClick={() => handleOptionSelect(nome)}
                >
                  <CubeTransparentIcon className="w-5 h-5 text-slate-300" />
                  <p className="text-sm">{nome}</p>
                </li>
              ))
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
