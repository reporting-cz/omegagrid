export * as bucket from "@omegagrid/bucket";
export * as code from "@omegagrid/code";
export * as commands from "@omegagrid/commands";
export * as core from "@omegagrid/core";
export * as editor from "@omegagrid/editor";
export * as form from "@omegagrid/form";
export * as grid from "@omegagrid/grid";
export * as statusbar from "@omegagrid/statusbar";
export * as tabs from "@omegagrid/tabs";
export * as toolbar from "@omegagrid/toolbar";
export * as tree from "@omegagrid/tree";

export const pkg = {
	name: process.env.PACKAGE_NAME,
	version: process.env.PACKAGE_VERSION,
};

import { registerIcons } from './icons';

registerIcons();