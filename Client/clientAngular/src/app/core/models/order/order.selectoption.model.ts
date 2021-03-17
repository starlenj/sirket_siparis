import { OptionValues } from "../options/optionvalues.model";

export interface SelectOrderOption{
  id: string;
  OrderBodyId: string;
  OptionsId: string;
  OrderOptions: OptionValues
}
