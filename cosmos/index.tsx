import { mountDomRenderer } from "react-cosmos/dom";
import { decorators, fixtures, rendererConfig } from "./cosmos.userdeps";

mountDomRenderer({ rendererConfig, decorators, fixtures });

if (import.meta.hot) import.meta.hot!.accept();
