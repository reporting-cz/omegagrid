import type { CellObject } from '@sheet/core';
import type { ColInfo } from '@sheet/core';
import Color from 'color';
import { color } from 'color';
import type { ConditionalFormat as ConditionalFormat_2 } from '@sheet/core';
import { CSSResult } from 'lit';
import { CSSResultGroup } from 'lit';
import { CSSResultOrNative } from 'lit';
import { DirectiveResult } from 'lit-html/development/directive';
import { LitElement } from 'lit';
import { Locale } from 'date-fns';
import type * as monacoNS from 'monaco-editor';
import { Options as Options_3 } from 'ts-debounce';
import { ParsingOptions } from '@sheet/core';
import type { Range as Range_2 } from '@sheet/core';
import { Ref } from 'lit/directives/ref.js';
import { Ref as Ref_2 } from 'lit-html/directives/ref.js';
import type { RowInfo } from '@sheet/core';
import type { Style as Style_2 } from '@sheet/core';
import SVG from 'svg.js';
import { TemplateResult } from 'lit';
import { TemplateResult as TemplateResult_2 } from 'lit-html';
import { UnsafeHTMLDirective } from 'lit/directives/unsafe-html.js';
import { WorkBook } from '@sheet/core';
import type { WorkSheet } from '@sheet/core';
import type XLSXNS from '@sheet/core';

/**
 * Returns the absolute value of a number.
 *
 * @link https://support.google.com/docs/answer/3093459
 * @link https://support.microsoft.com/en-us/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c
 *
 * @param x number
 * @returns number
 */
declare function abs(x: number): number;

declare class Accordion extends SplitContainer {
    #private;
    static styles: CSSResult[];
    items: AcordionItem[];
    constructor();
    willUpdate(props: Map<string, unknown>): void;
    get totalCollapsedHeight(): number;
    fixSizes(): Promise<void>;
    layout(): void;
    getComponent(index: number, id?: ComponentId): Panel;
    connectedCallback(): void;
}

declare type AcordionItem = SplitContainerItem & {
    title?: string;
    icon?: string | IconSpec;
};

declare function acos(x: number): number;

declare function acosh(x: number): number;

declare function acot(x: number): number;

declare function acoth(x: number): number;

declare type Action = {
    key: string;
    value?: unknown;
    type?: string;
    icon?: string;
};

declare class ActionEvent<TArgs = null> extends Event {
    readonly scope: string;
    readonly action: Action;
    readonly args: TArgs;
    constructor(scope: string, action: Action, args?: TArgs, init?: EventInit & {
        common?: boolean;
    });
}

export declare namespace actions {
    export {
        dispatchActionEvent,
        Action,
        ActionEvent
    }
}

declare class AddEvent<TValue = any> extends Event {
    readonly value: TValue;
    readonly oldValue: TValue;
    constructor(args?: Partial<AddEvent> | TValue);
}

declare const addGradient: (css: CSSStyle, s: Style) => CSSStyle;

declare const addPattern: (css: CSSStyle, s: Style) => CSSStyle;

declare function address(row: number, column: number, mode?: number): string;

declare function addThemeVariables(style: CSSStyleDeclaration, variables: ThemeVariables): CSSStyleDeclaration;

/**
 * Actions = 'a',
 * Html = 'h'
 */
declare type AditionalUIValueType = 'a' | 'h';

declare class Alert extends LitElement {
    static styles: CSSResult[];
    text: string;
    icon: string;
    type: AlertType;
    closable: boolean;
    close(dispatchEvent?: boolean): void;
    render: () => TemplateResult<1>;
}

declare class AlertEvent extends Event {
    constructor(type: string);
}

declare class AlertEvent_2 extends Event {
    constructor(type: string);
}

declare type AlertItem = {
    options: BucketAlertOptions;
    component: BucketAlert;
    timer?: number;
};

declare type AlertsOptions = {
    maxItems: number;
    timeout: number;
};

declare type AlertType = 'danger' | 'warning' | 'info' | 'success';

declare interface Alignment {
    /** Indent level */
    indent?: number;
    /** Wrap text */
    wrapText?: boolean;
    /** Horizontal Alignment */
    horizontal?: HorizontalAlignment;
    /** Vertical Alignment */
    vertical?: VerticalAlignment;
    /** Text rotation */
    textRotation?: number;
}

declare const alignmentToString: (a?: Alignment) => string;

/**
 * @param color Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @param amount
 * @returns Color hex string
 */
declare function alpha(color: string, amount?: number): string;

declare class AMD {
    static require: Require;
}

declare function and(...args: ArrayArg): boolean;

declare type AnyConstructor<A = object> = new (...input: any[]) => A;

declare type AnyFunction<A = any> = (...input: any[]) => A;

declare function appendElement(parent: HTMLElement | DocumentFragment, child: HTMLElement): HTMLElement;

declare function appendScript(elm: HTMLElement | DocumentFragment, js: string, id?: string): Node;

declare function appendStyle(elm: HTMLElement | DocumentFragment, style: string, id?: string): Node;

declare const applyStyle: (div: HTMLDivElement, style: CSSStyle) => void;

declare function applyTheme(theme: TableTheme, model: GridModel): void;

declare type Arg<T = Value> = T | ArrayArg<T>;

declare type ArrayArg<T = Value> = Matrix<T> | Matrix<T>[];

declare function arrayToCsv(data: Matrix, csvDescription?: Partial<CsvDescription>): string;

declare type ArythmeticOperator = '*' | '/' | '+' | '-';

declare function asin(x: number): number;

declare function asinh(x: number): number;

declare function atan(x: number): number;

declare function atanh(x: number): number;

declare function autofill(model: GridModel, selectedRange: CellRange, autofillRange: CellRange, direction: Direction): SpillResult;

declare type AutofitOptions = {
    visibleOnly?: boolean;
};

declare function avedev(...args: ArrayArg<number>): number;

declare function average(...args: ArrayArg): number;

declare function average_weighted(values: ArrayArg<number>, weights: ArrayArg<number>): number;

declare abstract class BaseControl<TValue = unknown, TAdapter extends ComponentAdapter = null> extends LitElement implements IControl<TValue, TAdapter> {
    static styles: CSSResult[];
    model: FormControlModel;
    formModel: FormModel;
    adapter: TAdapter;
    value: TValue;
    required: boolean;
    protected updateValue(value: TValue, dispatchEvent?: boolean): void;
    willUpdate(changedProps: Map<PropertyKey, unknown>): void;
    reset(): void;
    validate(): void;
    get isValid(): boolean;
}

declare abstract class BaseEditor extends LitElement {
    static baseStyles: CSSResult;
    protected grid: Grid;
    protected cancel: boolean;
    protected activeCell: HTMLTableCellElement;
    protected activeCellModel: CellModel;
    protected _open: boolean;
    protected initialValue: unknown;
    constructor();
    abstract getValue(): unknown;
    abstract setValue(value: unknown): void;
    init(): void;
    connectedCallback(): void;
    alignWithCell(): void;
    open(grid: Grid, initialValue?: unknown, updatePosition?: boolean): this;
    commit(): void;
    close(): void;
    activate(cell: CellModel): void;
    deactivate(): void;
}

declare class BaseElement extends LitElement {
    readonly customProperties: Record<string, unknown>;
}

declare abstract class BaseFilter extends LitElement {
    static styles: CSSResult[];
    filterModel: FilterModel_2;
    columnModel: ColumnModel;
    get currentValue(): FilterValue;
    constructor();
    protected filter(term: FilterValue): void;
    protected clearFilter(): void;
    abstract render(): void;
    activate(): void;
    deactivate(): void;
}

declare type BaseGroupModelSource = {
    models: GridSource[];
    themes?: TableTheme[];
};

declare function BaseRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

declare interface Border {
    /** Border Style */
    style?: BorderStyle;
    /** Border Color */
    color?: Color_2;
}

declare const borderCSSStyleMap: Map<CSSBorderStyle, Map<number, BorderStyle>>;

declare type BorderStyle = 'none' | 'thin' | 'medium' | 'thick' | 'double' | 'dotted' | 'hair' | 'dashed' | 'mediumDashed' | 'dashDot' | 'mediumDashDot' | 'dashDotDot' | 'mediumDashDotDot' | 'slantDashDot';

declare const borderStyleCSSMap: Map<BorderStyle, {
    width: number;
    style: CSSBorderStyle;
}>;

declare const borderToString: (b?: Border) => string;

declare class Bucket extends OmegaComponent implements Layout {
    #private;
    static styles: CSSResult[];
    static uniqueId: number;
    static getUniqueId: () => number;
    overlay: Overlay;
    menu: CommandWindow;
    top: BucketTop;
    sidemenu: Sidemenu;
    container: SplitContainer;
    body: HTMLDivElement;
    createComponent: ComponentFactory;
    sourceData: BucketSource;
    options: BucketOptions;
    logger: log.Logger;
    sidebar1ComponentId: string;
    editorContainer: TabSplitContainer;
    private _componentPromiseResolutions;
    private _resolvingComponentIds;
    readonly components: Map<ComponentId, HTMLElement>;
    readonly dialogs: Map<ComponentId, BucketDialog>;
    modalSidebars: ModalSidebarOptions[];
    readonly modalSidebarComponents: Map<ComponentId, ModalSidebar>;
    readonly unsavedComponents: Set<ComponentId>;
    private _activeComponentId;
    get activeComponentId(): ComponentId;
    get hasUnsavedComponents(): boolean;
    dispatchStateEvent: {
        (this: unknown, ...args: [] & any[]): Promise<boolean>;
        cancel: (reason?: any) => void;
    };
    readonly alerts: BucketAlerts;
    constructor();
    _onWindowBeforeUnload: (e: BeforeUnloadEvent) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    layout(): void;
    setSourceData(sourceData: BucketSource): void;
    firstUpdated(): Promise<void>;
    registerComponent(id: ComponentId, component: HTMLElement): void;
    unregisterComponent(id: ComponentId): void;
    registerDialog(id: ComponentId, dialog: BucketDialog): void;
    unregisterDialog(id: ComponentId): void;
    updateComponent(id: ComponentId, options: ComponentUpdateOptions): HTMLElement;
    private resolveComponentPromises;
    private enqueueComponentResolution;
    getComponent(id: ComponentId): Promise<HTMLElement>;
    open(item: TabItem): Promise<HTMLElement>;
    openDialog(options: OpenDialogOptions): Promise<BucketDialog>;
    openMenu(options: BucketMenuOptions): Promise<Command | null>;
    openModalSidebar(options: ModalSidebarOptions): Promise<HTMLElement>;
    closeModalSidebar(all?: boolean): Promise<void>;
    toggleSidebar(): Promise<void>;
    hideSidebar(): Promise<void>;
    showSidebar(): Promise<void>;
    showAlert(options: BucketAlertOptions): Promise<void>;
    updateModalSidebarPositions(): void;
    createModalSidebarComponent: (options: ModalSidebarOptions) => ModalSidebar;
    createEditorComponent: (id: ComponentId) => ComponentHost;
    createEditorContainer(): TabSplitContainer;
    getSidebarHost(): Sidebar;
    _createSplitContainerComponent: ComponentFactory;
    getState(): BucketState;
    setState(state: BucketState): Promise<void>;
    _onSplitContainerResize: () => void;
    _onTabRemove: (e: TabEvent) => void;
    _onTabBeforeRemove: (e: TabEvent) => void;
    _onTabSelect: (e: TabEvent) => void;
    _onSidemenuSelect(e: ListSelectEvent): void;
    updateSidebarComponent(): void;
    updateMainComponent(): void;
    render: () => TemplateResult<1>;
}

export declare namespace bucket {
    export {
        BucketEvent,
        Bucket,
        AlertEvent,
        BucketAlert,
        Sidebar,
        Sidemenu,
        BucketTop,
        BucketButton,
        ComponentHost,
        ModalSidebar,
        CommonMenu,
        commonMenus,
        SidemenuItem,
        SidemenuSettings,
        ModalSidebarOptions,
        ComponentOptions,
        ComponentUpdateOptions,
        TopItem,
        TopSettings,
        BucketSource,
        BucketMenuOptions,
        BucketDialog,
        BucketState,
        OpenDialogOptions,
        BucketAlertType,
        BucketAlertOptions
    }
}

declare class BucketAlert extends LitElement {
    static styles: CSSResult;
    options: BucketAlertOptions;
    color: ColorTypes;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    private get iconSpec();
    close(dispatchEvent?: boolean): void;
    render: () => TemplateResult<1>;
}

declare type BucketAlertOptions = {
    title?: string | TemplateResult<1>;
    icon?: string | IconSpec;
    type?: BucketAlertType;
    content?: string | TemplateResult<1>;
    timeout?: number;
};

declare class BucketAlerts extends ComponentSlice<Bucket> {
    private items;
    addAlert(options: BucketAlertOptions): Promise<void>;
    updatePositions(): void;
    removeAlert(item: AlertItem): void;
}

declare type BucketAlertType = 'danger' | 'warning' | 'info' | 'success';

declare class BucketButton extends LitElement {
    text: string;
    icon: IconSpec | string;
    active: boolean;
    statusIcon: string | [string, string];
    static styles: CSSResult;
    private get iconSpec();
    render: () => TemplateResult<1>;
}

declare type BucketDialog = Dialog & {
    componentId: ComponentId;
};

declare class BucketEvent extends Event {
    tab: TabItem;
    componentId: ComponentId;
    constructor(type: string, args?: Partial<BucketEvent>);
}

declare type BucketMenuOptions = {
    text?: string;
    content: CommonMenu | Commands;
};

declare type BucketOptions = {
    alerts: AlertsOptions;
} & Options;

declare type BucketSource = {
    top?: TopSettings;
    sidemenu?: SidemenuSettings;
    editorLayout?: TabSplitContainerSource;
};

declare type BucketState = {
    sidebar?: {
        selectedItem?: ComponentId;
        width?: number;
        collapsed?: boolean;
    };
    layout?: TabSplitContainerSource;
    dialogs?: OpenDialogOptions[];
};

declare class BucketTop extends LitElement implements Layout {
    static styles: CSSResult[];
    bucket: Bucket;
    items: NodeListOf<HTMLDivElement>;
    leftItemWidth: number;
    updated(): Promise<void>;
    firstUpdated(): void;
    render: () => TemplateResult<1>;
    layout(): void;
}

declare function buildLevelBasedTree(nodes: TreeNodeType[], root: TreeNodeType, options?: LevelBasedTreeCreateOptions): number;

declare function buildParentBasedTree(nodes: TreeNodeType[], root: TreeNodeType): number;

declare function buildTree(nodes: TreeNodeType[], root: TreeNodeType): number;

declare class Button extends LitElement {
    static styles: CSSResult[];
    icon: string | IconSpec;
    text: string;
    color: ColorTypes;
    caret: boolean;
    disabled: boolean;
    default: boolean;
    state: 'checked' | 'unchecked';
    type: 'normal' | 'toggle';
    buttonIcon: IconSpec;
    constructor();
    willUpdate(props: Map<PropertyKey, undefined>): void;
    get hasContent(): string | boolean;
    render: () => TemplateResult<1>;
}

declare class CalculationContext {
    readonly model: GridModel;
    currentCell: CellModel;
    constructor(model: GridModel);
    getModel: (sheet: string) => GridModel;
    /**
     * Returns cell value
     * @param a1 cell addres
     * @param sheet sheet name
     * @returns cell value
     */
    cl: (a1?: RangeAddress, sheet?: string) => unknown;
    /**
     * Returns range value matrix
     * @param a1 cell addres
     * @param sheet sheet name
     * @returns cell value matrix
     */
    rn: (a1: RangeAddress, sheet?: string) => Matrix<unknown>;
    /**
     * Returns cell value by range name
     * @param name range (cell) name
     * @param sheet sheet name
     * @returns cell value
     */
    nv: (name: string, sheet?: string) => unknown;
    /**
     * Returns cell value matrix for named range
     * @param a1 range address
     * @param sheet sheet name
     * @returns cell value matrix
     */
    nr: (name: string, sheet?: string) => unknown;
    /**
     * returns formula function
     * @param name function name
     * @returns
     */
    fn: (name: string) => FormulaFunction;
    /**
     * Performs matrix operation
     * @param operand1
     * @param operand2
     * @param operator
     * @return value
     */
    op: (operand1: Matrix, operand2: Matrix, operator: Operator) => Matrix;
}

declare class CalculationModel {
    readonly model: GridModel;
    private _tokenizer;
    get tokenizer(): Tokenizer;
    private _dependencies;
    get dependencies(): Dependencies;
    private _formulas;
    get formulas(): Map<string, Formula>;
    private context;
    constructor(model: GridModel);
    createFormula(cell: CellModel): Formula;
    createDependecies(cell: CellModel): this;
    refreshFormula(cell: CellModel): this;
    updateDependencies(cell: CellModel): this;
    getFormula(cell: CellModel): Formula;
    refresh(): void;
    clearDependecies(cell: CellModel): this;
    evaluateFormula(formula: Formula, cell: CellModel): unknown;
    evaluateExpression(expression: FormulaString, cell?: CellModel): unknown;
    evaluate(cell: CellModel, noSpill?: boolean): unknown;
    evaluateAll(): void;
    calculateViewport(viewport: Viewport): CellModel[];
    shift(options: ShiftOptions): this;
    getFormulaCells(): CellModel[];
    renameSheet(oldName: string, newName: string): boolean;
    invalidateCellDependants(cell: CellModel): [CellModel, string?][];
    invalidateDependants(cells: Iterable<CellModel>): Map<CellModel, string>;
}

declare class CalendarDateInput extends BaseControl<Date | string> {
    static styles: CSSResult[];
    get formattedValue(): SerializedValue[];
    _onChange: (e: events.ChangeEvent) => void;
    get date(): Date;
    render: () => TemplateResult<1>;
}

declare function ceiling(x: number): number;

declare type CellAction = {
    action: string;
    icon?: string;
    text?: string;
    title?: string;
    color?: ColorTypes;
};

declare type CellAddress = string;

declare interface CellBorderStyle {
    top?: Border;
    right?: Border;
    bottom?: Border;
    left?: Border;
}

declare type CellConditionalFormat = {
    cf: ConditionalFormat;
    f?: Formula;
    initialized?: boolean;
};

declare class CellModel extends ElementModel {
    _content: HTMLDivElement;
    private _tooltip;
    get tooltip(): string | unknown;
    set tooltip(v: string | unknown);
    get hasTooltip(): boolean;
    private _rowspan;
    get rowspan(): number;
    set rowspan(v: number);
    private _colspan;
    get colspan(): number;
    set colspan(v: number);
    row: RowModel;
    get r(): number;
    column: ColumnModel;
    get c(): number;
    private _value;
    private _evaluated;
    get hasValue(): boolean;
    get value(): unknown;
    set value(v: unknown);
    evaluate(): unknown;
    get value2(): unknown;
    private _displayValue;
    get hasDisplayValue(): boolean;
    get displayValue(): string;
    set displayValue(v: string);
    private _error;
    get error(): string;
    set error(v: string);
    get hasError(): boolean;
    clearError(): void;
    private _spillRange;
    private _prevSpillRange;
    get spillRange(): CellRange;
    get prevSpillRange(): CellRange;
    set spillRange(v: CellRange);
    get isSpillSource(): boolean;
    private _spillSource;
    get spillSource(): CellModel;
    get isSpilled(): boolean;
    spillValue(v: unknown, source?: CellModel): void;
    clearSpilledValue(): void;
    private _sparkline;
    get hasSparkline(): boolean;
    private _hasComment?;
    get hasComment(): boolean;
    get comments(): CommentItem[];
    private _composedStyle;
    private _cssStyle;
    private _hasStyle?;
    get valueFormatter(): ValueFormatter<unknown>;
    get formattedValue(): string;
    private get elm1();
    private get elm2();
    get clickable(): boolean;
    get type(): CellType;
    set type(value: CellType);
    get editorContent(): unknown;
    get adapter(): ComponentAdapter;
    set adapter(value: ComponentAdapter);
    get address(): string;
    get range(): CellRange;
    get allowInvalid(): boolean;
    get editable(): boolean;
    set editable(v: boolean);
    get commentable(): boolean;
    get renderer(): Renderer;
    get afterRenderer(): Renderer;
    get commentRenderer(): CommentRenderer;
    get format(): numbers.NumberFormatString;
    set format(v: numbers.NumberFormatString);
    private _hasFormula;
    get hasOwnFormula(): boolean;
    get hasFormula(): boolean;
    get formula(): string;
    set formula(v: string);
    invalidateValue(): void;
    refreshFormula(): void;
    clearFormula(): void;
    constructor(model: GridModel, source: CellSource);
    populate(source: CellSource): void;
    getSourceData(): CellSource;
    private createComposedStyle;
    get composedStyle(): Style;
    get calculatedIndent(): number | null;
    get cssStyle(): CSSStyle;
    invalidateStyle(): void;
    setStyleProperties(props: Record<StylePropertyKey, unknown>): void;
    removeStyleProperties(props: string[]): void;
    previewStyleProperties(props: Record<StylePropertyKey, unknown>, type?: 'cell' | 'column' | 'row'): void;
    toString(): string;
}

declare class CellRange {
    c1: number;
    c1Anchor: boolean;
    r1: number;
    r1Anchor: boolean;
    c2: number;
    c2Anchor: boolean;
    r2: number;
    r2Anchor: boolean;
    sheet?: string;
    constructor(c1?: number, r1?: number, c2?: number, r2?: number, sheet?: string);
    setCoords(c1: number, r1: number, c2?: number, r2?: number): void;
    get size(): {
        columns: number;
        rows: number;
    };
    get count(): number;
    private normalize;
    move(columns: number, rows: number, maxColumns?: number, maxRows?: number, cycle?: boolean): void;
    contains(r: CellRange): boolean;
    containsColumn(c: number): boolean;
    containsRow(r: number): boolean;
    removeAnchors(): this;
    addAnchors(): this;
    shiftLeft(c: number, offset?: number, maxIndex?: number, ignoreAnchors?: boolean): this;
    shiftRight(c: number, offset?: number, maxIndex?: number, ignoreAnchors?: boolean): this;
    shiftUp(r: number, offset?: number, maxIndex?: number, ignoreAnchors?: boolean): this;
    shiftDown(r: number, offset?: number, maxIndex?: number, ignoreAnchors?: boolean): this;
    shift(options: ShiftOptions): this;
    intersect(r: CellRange): CellRange;
    unite(r: CellRange): CellRange;
    clone(): CellRange;
    equals(r: CellRange, exact?: boolean): boolean;
    get isCell(): boolean;
    get isRange(): boolean;
    get isColumn(): boolean;
    get isRow(): boolean;
    get A1(): RangeAddress;
    get bounds(): [[CellRange, CellRange], [CellRange, CellRange]];
    cells(): Generator<CellRange, void, unknown>;
    static fromA1(a1: RangeAddress): CellRange;
    static fromA1s: (a1: RangeAddress, delimiter?: string) => CellRange[];
    static toA1s: (ranges: CellRange[], delimiter?: string) => string;
    static fromCoords: (r: RangeCoords) => CellRange;
    static fullColumn: (c: number) => CellRange;
    static fullRow: (r: number) => CellRange;
}

/** Source object type for grid cell */
declare type CellSource = {
    /** row index */
    r: number;
    /** col index */
    c: number;
    /** cell value */
    v?: unknown;
    /** cell display value */
    dv?: string;
    /** cell column span */
    cs?: number;
    /** cell row span */
    rs?: number;
    /** cell tooltip content */
    tooltip?: string | unknown;
} & ElementSource;

declare type CellType = UIValueType | AditionalUIValueType;

declare const cellTypeRendererMap: Record<CellType, Renderer>;

declare type CellValueType = unknown;

declare class ChangeEvent<TValue = any> extends Event {
    readonly value: TValue;
    readonly oldValue: TValue;
    constructor(args?: Partial<ChangeEvent> | TValue);
}

declare class Checkbox extends LitElement {
    static defaultIconSet: string;
    static defaultAlternateIconSet: string;
    get iconSet(): string;
    get alternateIconSet(): string;
    static styles: CSSResult;
    value: CheckboxState;
    color: string;
    get icon(): string;
    render: () => TemplateResult<1>;
}

declare function CheckboxRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

declare type CheckboxState = 'none' | 'checked' | 'indeterminable' | 'unchecked';

declare function choose(index: number, ...args: ArrayArg): unknown;

declare function clone(obj: any): any;

declare function clone_2<T>(m: Matrix<T>): T[][];

declare function cloneDeep(obj: any): {};

declare class Code extends LitElement implements Layout {
    #private;
    static styles: CSSResult;
    get options(): monacoNS.editor.IStandaloneEditorConstructionOptions;
    set options(val: monacoNS.editor.IStandaloneEditorConstructionOptions);
    get content(): string;
    set content(val: string);
    get language(): string;
    set language(val: string);
    get selectedContent(): string;
    get contentWindow(): Window;
    get document(): Document;
    get head(): HTMLHeadElement;
    get body(): HTMLElement;
    get monaco(): typeof monacoNS;
    iframe: HTMLIFrameElement;
    get editor(): monacoNS.editor.IStandaloneCodeEditor;
    get model(): monacoNS.editor.ITextModel;
    get theme(): "vs" | "vs-dark";
    getOptions: () => monacoNS.editor.IStandaloneEditorConstructionOptions;
    initEditor(): Promise<void>;
    updated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render: () => TemplateResult<1>;
    layout(): void;
    dispose(): void;
    focus(): void;
}

export declare namespace code {
    export {
        MonacoLoader,
        MonacoLoader as loader,
        Code,
        CodeDiffEditor,
        CodeBlock,
        CodeView,
        CodeEvent,
        CodeDiffEvent
    }
}

declare class CodeBlock extends LitElement implements Layout {
    #private;
    static styles: CSSResult;
    language: string;
    dynamicHeight: boolean;
    maxHeight: number;
    minHeight: number;
    disableToolbar: boolean;
    editor: Code;
    editorOptions: monacoNS.editor.IStandaloneEditorConstructionOptions;
    get languageAdapter(): LangTreeAdapter;
    get content(): string;
    set content(value: string);
    get monacoEditor(): monacoNS.editor.IStandaloneCodeEditor;
    get model(): monacoNS.editor.ITextModel;
    updateHeight(): void;
    _onChange: (_e: CodeEvent) => void;
    willUpdate(changedProps: Map<PropertyKey, unknown>): Promise<void>;
    _onLanguageChange: (e: TreeEvent) => void;
    getEditorOptions: () => {
        model?: monacoNS.editor.ITextModel | null;
        value?: string;
        language?: string;
        theme?: string;
        autoDetectHighContrast?: boolean;
        accessibilityHelpUrl?: string;
        ariaContainerElement?: HTMLElement;
        dimension?: monacoNS.editor.IDimension;
        overflowWidgetsDomNode?: HTMLElement;
        inDiffEditor?: boolean;
        ariaLabel?: string;
        ariaRequired?: boolean;
        screenReaderAnnounceInlineSuggestion?: boolean;
        tabIndex?: number;
        rulers?: (number | monacoNS.editor.IRulerOption)[];
        wordSeparators?: string;
        selectionClipboard?: boolean;
        lineNumbers?: monacoNS.editor.LineNumbersType;
        cursorSurroundingLines?: number;
        cursorSurroundingLinesStyle?: "default" | "all";
        renderFinalNewline?: "on" | "off" | "dimmed";
        unusualLineTerminators?: "auto" | "off" | "prompt";
        selectOnLineNumbers?: boolean;
        lineNumbersMinChars?: number;
        glyphMargin?: boolean;
        lineDecorationsWidth?: number | string;
        revealHorizontalRightPadding?: number;
        roundedSelection?: boolean;
        extraEditorClassName?: string;
        readOnly?: boolean;
        readOnlyMessage?: monacoNS.IMarkdownString;
        domReadOnly?: boolean;
        linkedEditing?: boolean;
        renameOnType?: boolean;
        renderValidationDecorations?: "editable" | "on" | "off";
        scrollbar?: monacoNS.editor.IEditorScrollbarOptions;
        stickyScroll?: monacoNS.editor.IEditorStickyScrollOptions;
        minimap?: monacoNS.editor.IEditorMinimapOptions;
        find?: monacoNS.editor.IEditorFindOptions;
        fixedOverflowWidgets?: boolean;
        overviewRulerLanes?: number;
        overviewRulerBorder?: boolean;
        cursorBlinking?: "blink" | "smooth" | "phase" | "expand" | "solid";
        mouseWheelZoom?: boolean;
        mouseStyle?: "text" | "default" | "copy";
        cursorSmoothCaretAnimation?: "off" | "explicit" | "on";
        cursorStyle?: "line" | "block" | "underline" | "line-thin" | "block-outline" | "underline-thin";
        cursorWidth?: number;
        fontLigatures?: boolean | string;
        fontVariations?: boolean | string;
        defaultColorDecorators?: boolean;
        disableLayerHinting?: boolean;
        disableMonospaceOptimizations?: boolean;
        hideCursorInOverviewRuler?: boolean;
        scrollBeyondLastLine: boolean;
        scrollBeyondLastColumn?: number;
        smoothScrolling?: boolean;
        automaticLayout?: boolean;
        wordWrap?: "off" | "on" | "wordWrapColumn" | "bounded";
        wordWrapOverride1?: "off" | "on" | "inherit";
        wordWrapOverride2?: "off" | "on" | "inherit";
        wordWrapColumn?: number;
        wrappingIndent?: "none" | "same" | "indent" | "deepIndent";
        wrappingStrategy?: "simple" | "advanced";
        wordWrapBreakBeforeCharacters?: string;
        wordWrapBreakAfterCharacters?: string;
        wordBreak?: "normal" | "keepAll";
        stopRenderingLineAfter?: number;
        hover?: monacoNS.editor.IEditorHoverOptions;
        links?: boolean;
        colorDecorators?: boolean;
        colorDecoratorsActivatedOn?: "clickAndHover" | "click" | "hover";
        colorDecoratorsLimit?: number;
        comments?: monacoNS.editor.IEditorCommentsOptions;
        contextmenu?: boolean;
        mouseWheelScrollSensitivity?: number;
        fastScrollSensitivity?: number;
        scrollPredominantAxis?: boolean;
        columnSelection?: boolean;
        multiCursorModifier?: "ctrlCmd" | "alt";
        multiCursorMergeOverlapping?: boolean;
        multiCursorPaste?: "spread" | "full";
        multiCursorLimit?: number;
        accessibilitySupport?: "auto" | "off" | "on";
        accessibilityPageSize?: number;
        suggest?: monacoNS.editor.ISuggestOptions;
        inlineSuggest?: monacoNS.editor.IInlineSuggestOptions;
        experimentalInlineEdit?: monacoNS.editor.IInlineEditOptions;
        smartSelect?: monacoNS.editor.ISmartSelectOptions;
        gotoLocation?: monacoNS.editor.IGotoLocationOptions;
        quickSuggestions?: boolean | monacoNS.editor.IQuickSuggestionsOptions;
        quickSuggestionsDelay?: number;
        padding?: monacoNS.editor.IEditorPaddingOptions;
        parameterHints?: monacoNS.editor.IEditorParameterHintOptions;
        autoClosingBrackets?: monacoNS.editor.EditorAutoClosingStrategy;
        autoClosingComments?: monacoNS.editor.EditorAutoClosingStrategy;
        autoClosingQuotes?: monacoNS.editor.EditorAutoClosingStrategy;
        autoClosingDelete?: monacoNS.editor.EditorAutoClosingEditStrategy;
        autoClosingOvertype?: monacoNS.editor.EditorAutoClosingEditStrategy;
        autoSurround?: monacoNS.editor.EditorAutoSurroundStrategy;
        autoIndent?: "none" | "keep" | "brackets" | "advanced" | "full";
        stickyTabStops?: boolean;
        formatOnType?: boolean;
        formatOnPaste?: boolean;
        dragAndDrop?: boolean;
        suggestOnTriggerCharacters?: boolean;
        acceptSuggestionOnEnter?: "on" | "smart" | "off";
        acceptSuggestionOnCommitCharacter?: boolean;
        snippetSuggestions?: "top" | "bottom" | "inline" | "none";
        emptySelectionClipboard?: boolean;
        copyWithSyntaxHighlighting?: boolean;
        suggestSelection?: "first" | "recentlyUsed" | "recentlyUsedByPrefix";
        suggestFontSize?: number;
        suggestLineHeight?: number;
        tabCompletion?: "on" | "off" | "onlySnippets";
        selectionHighlight?: boolean;
        occurrencesHighlight?: "off" | "singleFile" | "multiFile";
        codeLens?: boolean;
        codeLensFontFamily?: string;
        codeLensFontSize?: number;
        lightbulb?: monacoNS.editor.IEditorLightbulbOptions;
        codeActionsOnSaveTimeout?: number;
        folding?: boolean;
        foldingStrategy?: "auto" | "indentation";
        foldingHighlight?: boolean;
        foldingImportsByDefault?: boolean;
        foldingMaximumRegions?: number;
        showFoldingControls?: "always" | "never" | "mouseover";
        unfoldOnClickAfterEndOfLine?: boolean;
        matchBrackets?: "never" | "near" | "always";
        experimentalWhitespaceRendering?: "svg" | "font" | "off";
        renderWhitespace?: "none" | "boundary" | "selection" | "trailing" | "all";
        renderControlCharacters?: boolean;
        renderLineHighlight?: "none" | "gutter" | "line" | "all";
        renderLineHighlightOnlyWhenFocus?: boolean;
        useTabStops?: boolean;
        fontFamily?: string;
        fontWeight?: string;
        fontSize?: number;
        lineHeight?: number;
        letterSpacing?: number;
        showUnused?: boolean;
        peekWidgetDefaultFocus?: "tree" | "editor";
        definitionLinkOpensInPeek?: boolean;
        showDeprecated?: boolean;
        matchOnWordStartOnly?: boolean;
        inlayHints?: monacoNS.editor.IEditorInlayHintsOptions;
        useShadowDOM?: boolean;
        guides?: monacoNS.editor.IGuidesOptions;
        unicodeHighlight?: monacoNS.editor.IUnicodeHighlightOptions;
        bracketPairColorization?: monacoNS.editor.IBracketPairColorizationOptions;
        dropIntoEditor?: monacoNS.editor.IDropIntoEditorOptions;
        pasteAs?: monacoNS.editor.IPasteAsOptions;
        tabFocusMode?: boolean;
        inlineCompletionsAccessibilityVerbose?: boolean;
        tabSize?: number;
        insertSpaces?: boolean;
        detectIndentation?: boolean;
        trimAutoWhitespace?: boolean;
        largeFileOptimizations?: boolean;
        wordBasedSuggestions?: "off" | "currentDocument" | "matchingDocuments" | "allDocuments";
        wordBasedSuggestionsOnlySameLanguage?: boolean;
        'semanticHighlighting.enabled'?: true | false | "configuredByTheme";
        stablePeek?: boolean;
        maxTokenizationLineLength?: number;
    };
    render: () => TemplateResult<1>;
    layout(): void;
    focus(): void;
}

declare class CodeDiffEditor extends LitElement implements Layout {
    #private;
    static monaco: typeof monacoNS;
    static styles: CSSResult;
    get options(): monacoNS.editor.IStandaloneEditorConstructionOptions;
    set options(val: monacoNS.editor.IStandaloneEditorConstructionOptions);
    get language(): string;
    set language(val: string);
    get modifiedContent(): string;
    set modifiedContent(val: string);
    get originalContent(): string;
    set originalContent(val: string);
    get selectedContent(): string;
    get contentWindow(): Window;
    get document(): Document;
    get head(): HTMLHeadElement;
    get body(): HTMLElement;
    get monaco(): typeof monacoNS;
    iframe: HTMLIFrameElement;
    get editor(): monacoNS.editor.IStandaloneDiffEditor;
    get modifiedModel(): monacoNS.editor.ITextModel;
    get originalModel(): monacoNS.editor.ITextModel;
    get theme(): "vs" | "vs-dark";
    getOptions: () => monacoNS.editor.IStandaloneDiffEditorConstructionOptions;
    initEditor(): Promise<void>;
    updated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render: () => TemplateResult<1>;
    layout(): void;
    dispose(): void;
    focus(): void;
}

declare type CodeDiffEvent = CodeEvent<monacoNS.editor.IStandaloneDiffEditor>;

declare class CodeEvent<T extends monacoNS.editor.IEditor = monacoNS.editor.IStandaloneCodeEditor> extends Event {
    readonly editor: T;
    readonly changes: monacoNS.editor.IModelContentChange[];
    constructor(type: string, args: Partial<CodeEvent<T>>);
}

declare class CodeView extends LitElement {
    static styles: CSSResult[];
    language: string;
    scrollable: boolean;
    content: string;
    copy: boolean;
    root: HTMLDivElement;
    alertCopy: Alert;
    get theme(): "vs" | "vs-dark";
    onStyleChange: () => void;
    updated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    copyContent: () => void;
    render: () => TemplateResult<1>;
}

declare type Color_2 = string;

declare const colorable: (args: ColorableArgs) => <T extends AnyConstructor<LitElement>>(superClass: T) => AnyConstructor<LitElement> & T;

declare type ColorableArgs = {
    props: ColorableProperties[];
    selector?: string;
};

declare type ColorableProperties = 'color' | 'background' | 'border';

declare class ColorPicker extends LitElement {
    static styles: CSSResult;
    colors: string[][];
    color: string;
    input: HTMLInputElement;
    _lastValue: string;
    _isEditing: boolean;
    get isManuallyEdited(): boolean;
    commit(value: string, dispatchEvent?: boolean): boolean;
    constructor();
    willUpdate(): void;
    resetEditState(): void;
    updateInput(color?: string): void;
    _onTextInput: (_e: InputEvent) => void;
    _onTextChange: () => void;
    render: () => TemplateResult<1>;
}

declare class ColorPickerEvent extends Event {
    readonly color: string;
    constructor(type: string, color: string);
}

export declare namespace colors {
    export {
        lighten,
        darken,
        alpha,
        getComplmentaryColor,
        mix,
        contrastColor,
        plainHex,
        css
    }
}

declare enum ColorTypes {
    Accent = "accent",
    Red = "red",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Gray = "gray",
    Transparent = "transparent"
}

declare function column(address?: string): number;

/** Source object type for column header item */
declare type ColumnHeaderModel = {
    /** row index (readonly) */
    r?: number;
    /** header label */
    label?: string;
    /** enable html in header label */
    html?: boolean;
    /** column span */
    cs?: number;
    /** row span */
    rs?: number;
    /** header height */
    height?: number;
    /** visibility (readonly) */
    hidden?: boolean;
    /** header cell style */
    style?: StyleSource;
    /** style index */
    _style?: number;
};

declare class ColumnModel extends ColumnModel_base {
    data?: number | string;
    visibleIndex: number;
    private _comparer?;
    get comparer(): Comparer;
    set comparer(v: Comparer);
    private _filter;
    get filter(): FilterColumnOptions;
    set filter(v: FilterColumnOptions);
    get hasFilter(): boolean;
    private _sorting;
    get sorting(): boolean;
    set sorting(v: boolean);
    private _width;
    get width(): number;
    set width(value: number);
    private _levelIndent;
    get levelIndent(): boolean;
    set levelIndent(value: boolean);
    private _levelButtons;
    get levelButtons(): boolean;
    set levelButtons(value: boolean);
    private _priority;
    get priority(): number;
    set priority(value: number);
    get address(): string;
    get range(): CellRange;
    get hasFormula(): boolean;
    get formula(): string;
    set formula(v: string);
    constructor(model: GridModel, source?: ColumnSource);
    _header?: ColumnHeaderModel[];
    private _mergedHeaders;
    get mergedHeaders(): ColumnHeaderModel[];
    updateMergedHeaders(): void;
    set header(header: ColumnHeaderModel[]);
    get header(): ColumnHeaderModel[];
    convertSourceHeader(header: string | ColumnHeaderModel[]): ColumnHeaderModel[];
    populate(source: ColumnSource): void;
    getSourceData(): ColumnSource;
    expand(unhide?: boolean): void;
    collapse(): void;
    get prev(): ColumnModel;
    get next(): ColumnModel;
    get prevVisible(): ColumnModel;
    get nextVisible(): ColumnModel;
    calculateRealColspan(colspan: number): number;
    cell(r: number): CellModel;
    clearCalculatedValues(): void;
}

declare const ColumnModel_base: (new (...input: any[]) => {
    index: number;
    parentIndex: number;
    level: number;
    _children: any[];
    _count: number;
    _parent: any;
    _collapsed: boolean;
    _hidden: boolean;
    _filterState: tree_2.FilterState;
    _filterable: boolean;
    _sortable: boolean;
    populate(source: tree_2.TreeNodeSource): void;
    getSourceData(): tree_2.TreeNodeSource;
    readonly filterable: boolean;
    readonly sortable: boolean;
    filterState: tree_2.FilterState;
    hidden: boolean;
    readonly visible: boolean;
    collapsed: boolean;
    parent: any;
    children: any[];
    readonly hasChildren: boolean;
    count: number;
    readonly isLoaded: boolean;
    readonly isPartialyLoaded: boolean;
    readonly hasParent: boolean;
    readonly firstChild: any;
    readonly lastChild: any;
    addChild(child: any): void;
    insertChildren(children: any[], index: number): void;
    deleteChildren(index: number | any[], count?: number): void;
    expand(unhide?: boolean): void;
    collapse(): void;
    toggleCollapse(recursive?: boolean, unhide?: boolean): void;
    clearChildren(): void;
    walk(cb: (m: any) => unknown | void): void;
    walkVisible(cb: (m: any) => unknown | void): void;
    walkUp(cb: (m: any) => unknown | void): void;
    _sort(comparer: (a: any, b: any) => number): void;
    sort(comparer: (a: any, b: any) => number): void;
}) & typeof ElementModel;

declare function columns(range: ArrayArg): number;

/** Source object type for grid column */
declare type ColumnSource = {
    /** column width */
    w?: number;
    /** name of data property/index in row.data */
    data?: number | string;
    /** column header array */
    header?: string | ColumnHeaderModel[];
    /** enable column sorting */
    sorting?: boolean;
    /** enable column filtering */
    filter?: boolean | FilterColumnOptions;
    /** indent cell content by row level */
    levelIndent?: boolean;
    /** show expand buttons inside cell */
    levelButtons?: boolean;
    /** custom camparison function for column sorting */
    comparer?: Comparer;
    /** if column priority is higher then row priority, column properties has precedence over row properties */
    priority?: number;
} & tree_2.TreeNodeSource & ElementSource;

declare class Command {
    readonly id: string;
    readonly name: string;
    readonly section: string;
    readonly fn: CommandFunction;
    readonly requiredParams: number;
    constructor(options: Partial<Command>);
    exec(...params: string[]): void;
}

declare class CommandEvent extends Event {
    readonly command?: Command;
    constructor(type: string, command?: Command);
}

declare type CommandFunction = (...params: string[]) => void;

declare type CommandRenderer = (div: HTMLDivElement, command: Command) => string | TemplateResult<1> | null;

declare class Commands {
    readonly sections: Map<string, CommandGroup>;
    get count(): number;
    constructor(commands?: Partial<Command>[]);
    clear(): this;
    registerSection(section: Partial<CommandGroup>, append?: boolean): CommandGroup;
    removeSection(sectionId: string): void;
    register(command: Partial<Command>): void;
    remove(name: string): void;
    get(name: string): Command;
    exec(command: string, ...params: string[]): void;
    filter(term?: string, includeSections?: boolean, emptySections?: boolean): (CommandGroup | Command)[];
    merge(commands: Commands): Commands;
}

export declare namespace commands {
    export {
        CommandEvent,
        CommandRenderer,
        SectionRenderer,
        CommandWindow,
        CommandFunction,
        CommandGroup,
        Command,
        Commands,
        CommandsAdapter
    }
}

declare abstract class CommandsAdapter extends ComponentAdapter {
    abstract getSections(filter?: string): CommandGroup[] | Promise<CommandGroup[]>;
    abstract getCommands(sectionId: string, filter?: string): Command[] | Promise<Command[]>;
}

declare class CommandGroup {
    readonly id: string;
    readonly name: string;
    readonly commands: Map<string, Command>;
    open: boolean;
    constructor(id: string, name: string);
    addCommand(command: Command): void;
}

declare class CommandWindow extends LitElement {
    static styles: CSSResult[];
    private inputRef;
    get input(): HTMLInputElement;
    private listRef;
    get list(): List;
    private visibleItems;
    text: string;
    commands: Commands;
    adapter: CommandsAdapter;
    target: HTMLElement;
    triggerKey: string;
    showSections: boolean;
    requireUpdateCommands: boolean;
    commandRenderer: CommandRenderer;
    sectionRenderer: SectionRenderer;
    get filterValue(): string;
    exec(dispatchEvent?: boolean): void;
    _onKeyDown: (e: KeyboardEvent) => void;
    _onKeyUp: {
        (this: unknown, ...args: [e: any] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    constructor();
    open(dispatchEvent?: boolean): Promise<void>;
    close(dispatchEvent?: boolean): void;
    connectedCallback(): void;
    _onTargetKeyDown: (e: KeyboardEvent) => void;
    updated(properties: Map<PropertyKey, unknown>): Promise<void>;
    _onSelect: (e: ListSelectEvent) => void;
    _itemRenderer: ListItemRenderer;
    firstUpdated(): void;
    updateCommands(): Promise<void>;
    toggleSection(sectionId: string): Promise<void>;
    updatePosition(): void;
    render: () => TemplateResult<1>;
}

declare class Comment_2 extends LitElement {
    static styles: CSSResult[];
    items: CommentItem[];
    cellModel: CellModel;
    editIndex: number;
    bodies: NodeList;
    get editBody(): HTMLDivElement;
    get editing(): boolean;
    get editItem(): CommentItem;
    get globalOptions(): CommentOptions;
    private _attachedTo;
    private _hideTimer;
    private _hideTimerDisabled;
    private _movingOffset;
    private _connector;
    get attachedTo(): HTMLElement;
    get isAttached(): boolean;
    hide: () => HTMLElement;
    show: () => HTMLElement;
    constructor();
    add(): void;
    startEdit(index: number): void;
    endEdit(): void;
    delete(index: number): void;
    commit(): void;
    disconnectedCallback(): void;
    destroy(): void;
    _onMouseDown: (e: MouseEvent) => void;
    _onMouseOver: () => void;
    _onParentMouseDown: () => void;
    _onParentMouseUp: () => void;
    _onHeaderMouseDown: (e: MouseEvent) => void;
    _onParentMouseMove: (e: MouseEvent) => void;
    updated(): void;
    canEdit(index: number): boolean;
    get canAdd(): boolean;
    renderItemHeader: (item: CommentItem, index: number) => TemplateResult<1> | "";
    renderItem: (item: CommentItem, index: number) => TemplateResult<1>;
    render: () => TemplateResult<1>;
    deatach(timeout?: number): void;
    get zIndex(): number;
    updateConnector(): void;
    attachTo(cell: TableCell, cellModel: CellModel, startEdit?: boolean): void;
}

declare class CommentEvent extends Event {
    readonly items: CommentItem[];
    readonly comment: CommentItem;
    readonly index: number;
    readonly cell: CellModel;
    constructor(type: string, items: CommentItem[], comment: CommentItem, index: number, cell: CellModel);
}

declare class CommentItem {
    author?: User;
    text?: string;
    date?: Date;
    data?: unknown;
    readOnly?: boolean;
    protected _properties: CustomProperties;
    get properties(): CustomProperties;
    set properties(v: CustomProperties);
    constructor(source?: CommentSource);
    pupulate(source: CommentSource): void;
    getSourceData(): CommentSource;
}

declare class CommentModel {
    readonly model: GridModel;
    private _commentMap;
    constructor(model: GridModel, sourceData?: CommentSource[]);
    has: (a1: CellAddress) => boolean;
    delete: (a1: CellAddress) => boolean;
    cleanCell: (a1: CellAddress) => void;
    get: (a1: CellAddress) => CommentItem[];
    set: (a1: CellAddress, items: CommentItem[]) => void;
    populate(sourceData: CommentSource[]): void;
    shift(options: ShiftOptions): void;
}

declare type CommentOptions = {
    hideTimeout?: number;
    offsetX?: number;
    offsetY?: number;
    zIndex?: number;
    headerPosition?: 'top' | 'bottom';
    renderer?: CommentRenderer;
};

declare type CommentRenderer = (div: HTMLDivElement, comment: CommentItem, cell: CellModel) => HTMLDivElement;

declare type CommentSource = {
    /** author of the comment */
    author?: User;
    /** comment data, that can be used in custom comment renderer */
    data?: unknown;
    /** comment text */
    text?: string;
    /** comment date */
    date?: string | number | Date;
    /** column index of commented cell */
    c?: number;
    /** row index of commented cell */
    r?: number;
    /** address of commented cell */
    a1?: CellAddress;
    /** readonly comment */
    readOnly?: boolean;
    /** custom properties */
    props?: CustomProperties;
};

declare type CommonMenu = 'yes_no';

declare const commonMenus: Record<CommonMenu, Partial<Command>[]>;

declare type Comparer = (a: CellModel, b: CellModel) => number;

declare abstract class ComponentAdapter<TComponent extends HTMLElement = HTMLElement> {
    private _component;
    readonly customProperties?: Record<string, unknown>;
    get component(): TComponent;
    protected atteched(_component: TComponent): void;
    attach(component: TComponent): void;
}

declare interface ComponentContainer<T = HTMLElement> {
    createComponent: ComponentFactory<T>;
}

declare class ComponentEvent extends Event {
}

declare type ComponentFactory<T = HTMLElement> = (id?: ComponentId) => T | Promise<T>;

declare class ComponentHost extends LitElement implements Layout {
    static styles: CSSResult;
    bucket: Bucket;
    componentId: ComponentId;
    host: HTMLDivElement;
    private component;
    private isEdited;
    layout(): void;
    _onEdit: () => void;
    _onSave: () => void;
    updated(props: Map<PropertyKey, unknown>): Promise<void>;
}

declare type ComponentId = string | number;

declare type ComponentOptions = Record<string, unknown>;

declare class ComponentSlice<T extends OmegaComponent> {
    readonly component: T;
    constructor(component: T);
    connectedCallback(): void;
    disconnectedCallback(): void;
}

declare class ComponentStore<T extends HTMLElement> {
    readonly factory: ComponentFactory<T>;
    readonly items: Map<ComponentId, T>;
    constructor(factory: ComponentFactory<T>);
    get(id: ComponentId): Promise<T>;
    remove(id: ComponentId): this;
    has(id: ComponentId): boolean;
    clear(): void;
}

declare type ComponentUpdateOptions = {
    id?: ComponentId;
    title?: string;
};

declare function concat(...args: ArrayArg): string;

declare type Condition = string | number;

declare type ConditionalFormat = {
    type: ConditionalFormatType;
    key?: string;
    ranges?: CellRange[];
    firstCell?: CellRange;
    style?: Style;
    condition?: FormulaString;
    formula?: Formula;
    stop?: boolean;
    cmin?: ConditionalFormatBoundry;
    cmid?: ConditionalFormatBoundry;
    cmax?: ConditionalFormatBoundry;
    color?: Color_2;
    v?: ConditionalFormatIconType | unknown;
    thresh?: ConditionalFormatThresholdItem[];
};

declare type ConditionalFormatBoundry = {
    v?: number | string;
    t?: ConditionalFormatBoundryType;
    color?: Color_2;
};

declare type ConditionalFormatBoundryType = 'number' | 'percent' | 'percentile' | 'formula' | 'min' | 'max';

declare type ConditionalFormatIconSetDefinition = {
    type: string;
    count: number;
    icons: IconSpec[];
};

declare type ConditionalFormatIconType = '3Arrows' | /* 3 Arrows (Colored) */ '3ArrowsGray' | /* 3 Arrows (Gray) */ '3Flags' | /* 3 Flags */ '3TrafficLights1' | /* 3 Traffic Lights (unrimmed) */ '3TrafficLights2' | /* 3 Traffic Lights (rimmed) */ '3Signs' | /* 3 Signs */ '3Symbols' | /* 3 Symbols (Circled) */ '3Symbols2' | /* 3 Symbols (Uncircled) */ '3Stars' | /* 3 Stars */ '3Triangles' | /* 3 Triangles */ '4Arrows' | /* 4 Arrows (Colored) */ '4ArrowsGray' | /* 4 Arrows (Gray) */ '4RedToBlack' | /* Red To Black */ '4Rating' | /* 4 Ratings */ '4TrafficLights' | /* 4 Traffic Lights */ '5Arrows' | /* 5 Arrows (Colored) */ '5ArrowsGray' | /* 5 Arrows (Gray) */ '5Rating' | /* 5 Ratings */ '5Quarters' | /* 5 Quarters */ '5Boxes';

declare type ConditionalFormatItemSource = {
    type?: ConditionalFormatType;
    ranges: RangeAddress;
    style?: StyleSource;
    condition?: FormulaString;
    stop?: boolean;
    cmin?: ConditionalFormatBoundry;
    cmid?: ConditionalFormatBoundry;
    cmax?: ConditionalFormatBoundry;
    color?: Color_2;
    v?: ConditionalFormatIconType | unknown;
    thresh?: ConditionalFormatThresholdItem[];
};

declare class ConditionalFormats {
    readonly model: GridModel;
    readonly formats: ConditionalFormat[];
    readonly cellFormatMap: Map<string, CellConditionalFormat[]>;
    readonly extremes: Map<string, [number, number]>;
    private _dependencies;
    get dependencies(): Dependencies;
    constructor(model: GridModel, sourceData?: ConditionalFormatSource);
    populate(sourceData: ConditionalFormatSource): void;
    refresh(): void;
    clearCellDependecies(cell: CellModel): this;
    getExtremes(cf: ConditionalFormat): [number, number];
    invalidateExtremes(cell: CellModel): void;
    evaluateScaleFormat(cell: CellModel, ccf: CellConditionalFormat): Style;
    evaluateBarFormat(cell: CellModel, ccf: CellConditionalFormat): Style;
    evaluateFormulaFormat(cell: CellModel, ccf: CellConditionalFormat): {
        [x: string]: unknown;
        top?: Border;
        bottom?: Border;
        left?: Border;
        right?: Border;
        patternType?: PatternStyle;
        fgColor?: Color_2;
        bgColor?: Color_2;
        alignment?: Alignment;
        angle?: number;
        stops?: GradientStop[];
        hidden?: boolean;
        editable?: boolean;
        icon?: IconSpec;
        cssStyle?: CSSStyle;
        style?: string;
        hash?: string;
        id?: number;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        sz?: number;
        strike?: boolean;
        font?: string;
        color?: Color_2;
    };
    evaluateIconFormat(cell: CellModel, ccf: CellConditionalFormat): Style;
    evaluate(cell: CellModel): Style;
    initConditionalFormat(item: ConditionalFormat): ConditionalFormat;
    add(itemSource: ConditionalFormatItemSource): void;
    getSourceData(): ConditionalFormatItemSource[];
}

declare type ConditionalFormatSource = ConditionalFormatItemSource[];

declare type ConditionalFormatThresholdItem = {
    t: ConditionalFormatThresholdType;
    v?: number;
    f?: FormulaString;
};

declare type ConditionalFormatThresholdType = 'num' | 'percent' | 'percentile' | 'formula';

/** Data Validation Operators */
declare type ConditionalFormatType = ConditionalFormatTypeDiffStyle | ConditionalFormatTypeNoDiff;

declare type ConditionalFormatTypeDiffStyle = 'avg' | /* Format only values that are above or below average */ 'blank' | /* Format only cells that contain: Blanks or no Blanks */ 'date' | /* Format only cells that contain: Dates Occurring */ 'dup' | /* Format all duplicate values */ 'error' | /* Format only cells that contain: Errors or No Errors */ 'formula' | /* Format values where formula is true */ 'rank' | /* Format only top or bottom ranked values */ 'text' | /* Format only cells that contain: Specific Text */ 'unique' | /* Format all unique values */ 'val';

declare type ConditionalFormatTypeNoDiff = 'bar' | /* Format all cells based on values: Data Bars */ 'icon' | /* Format all cells based on values: Icon Sets */ 'scale';

declare class ConfigForm extends FormContainer {
    static styles: CSSResult[];
    model: GridModel;
    grid: Grid;
    group: GridGroup;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(): Promise<void>;
}

declare type Constructor<A = Populatable> = new (...input: any[]) => A;

declare class Container extends LitElement {
    static styles: CSSResult;
    content: string;
    overscroll: boolean;
    inner: HTMLDivElement;
    private verticalSliderRef;
    get verticalSlider(): Slider;
    private horizontalSliderRef;
    get horizontalSlider(): Slider;
    private contentObserver;
    private resizeObserver;
    private touchStart;
    private _mouseIn;
    get isScrolling(): boolean;
    fixScrollPosition(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    connectObservers(): void;
    disconnectObservers(): void;
    scrollVerticalByPixels(deltaY: number): boolean;
    scrollVerticalTo(top: number): void;
    scrollHorizontalByPixels(deltaX: number): boolean;
    scrollHorizontalTo(left: number): void;
    firstUpdated(): void;
    render: () => TemplateResult<1>;
    get scrollHeight(): number;
    get scrollWidth(): number;
    updateSliders(): void;
}

declare function contrastColor(strColor: string): string;

declare class ControlEvent<TValue> extends Event {
    readonly model: FormControlModel;
    readonly value: TValue;
    constructor(type: string, model: FormControlModel, value: TValue);
}

declare const convertCSSBorder: (border: string) => Border;

declare function convertCSSColor(color: string): string;

declare function convertCSSVerticalAlignment(align: string): VerticalAlignment;

declare function convertStyle(style: Style): Style_2;

declare const convertToCSSBorder: (b: Border) => string;

declare type Coords = {
    c: number;
    r: number;
};

export declare namespace core {
    export {
        _default as constants,
        Options as CommonOptions,
        initOptions as initCommonOptions,
        getDefaultOptions,
        dom,
        html,
        numbers,
        dates,
        csv,
        log,
        tree_2 as tree,
        colors,
        actions,
        utils,
        matrix,
        events,
        Require,
        AMD,
        ScriptLoader,
        LinkedListNode,
        ILinkedList,
        LinkedList,
        Accordion,
        AlertType,
        AlertEvent_2 as AlertEvent,
        Alert,
        ComponentEvent,
        BaseElement,
        Button,
        CheckboxState,
        Checkbox,
        Container,
        ColorPickerEvent,
        ColorPicker,
        DropdownEvent,
        DropdownContainer,
        Dropdown,
        DropdownColorPicker,
        DropdownList,
        DropdownMenu,
        ExpanderState,
        ExpandEvent,
        LevelExpandEvent,
        Expander,
        LevelExpander,
        IconSpec,
        Icon,
        images,
        Input,
        FileInput,
        NumericInput,
        ListItemRendererOptions,
        ListItemRenderer,
        ListItemElement,
        ListSelectTrigger,
        ListSelectEvent,
        ListPointerEvent,
        List,
        MenuItem,
        MenuEvent,
        MenuPosition,
        Menu,
        Overlay,
        Panel,
        ResizeEvent,
        Sizer,
        SplitContainerEvent,
        SplitContainerResizeEvent,
        SplitContainer,
        SlideEvent,
        SliderDirection,
        Slider,
        ListSortEvent,
        SortableList,
        SwitchState,
        SwitchEvent,
        Switch,
        TooltipPosition,
        Tooltip,
        Loader,
        ThemeDefinition,
        ThemeVariables,
        ThemeType,
        Theme,
        LocaleId,
        Layout,
        UIValueType,
        UIValueFormat,
        ColorTypes,
        DecimalSeparator,
        Orientation,
        Direction,
        DiagonalDirection,
        VerticalPosition,
        HorizontalPosition,
        DirectionalPosition,
        Size,
        Location_2 as Location,
        AcordionItem,
        SplitContainerItem,
        ComponentId,
        ComponentFactory,
        ComponentContainer,
        Matrix,
        Scalar,
        DeepPartial,
        Populatable,
        IPrototype,
        ValueFormatter,
        CustomProperties,
        User,
        AnyFunction,
        AnyConstructor,
        Mixin,
        Model,
        KeyValue,
        getThemeManager,
        ThemeChangeEvent,
        ThemeManager,
        themeable,
        ColorableProperties,
        ColorableArgs,
        colorable,
        detectThemeType,
        createThemeVariables,
        createThemeVariablesCss,
        addThemeVariables,
        ComponentAdapter,
        OmegaComponent,
        ComponentStore,
        ComponentSlice,
        Plugin_2 as Plugin,
        Plugins
    }
}

declare function cos(x: number): number;

declare function cosh(x: number): number;

declare function cot(x: number): number;

declare function coth(x: number): number;

declare function count(...args: ArrayArg): number;

declare function countblank(...args: ArrayArg): number;

declare function countif(v: ArrayArg, cond: Condition): number;

declare function countunique(...args: ArrayArg): number;

declare const createBoolMatcher: <TItem>(term: boolean, property: keyof TItem) => (item: TItem) => boolean;

declare const createCellMatcher: (type: CellType, term: FilterValue, property: keyof CellModel) => (item: CellModel) => boolean;

declare function createDateFormatter(locale: string, defaultFormat?: DateFormatString): DateFormatterFunction;

declare function createElement<T extends HTMLElement>(elmName: string, attrs?: Partial<T>): T;

declare function createGroupCommands(_group: GridGroup): {
    section: string;
    name: string;
    requiredParams: number;
    fn: (sheet: string) => void;
}[];

declare function createModel(file: File, options?: Partial<ParsingOptions>): Promise<GroupModelSource>;

declare function createModelFromArrayBuffer(data: ArrayBuffer | Uint8Array, options?: Partial<ParsingOptions>): Promise<GroupModelSource>;

declare function createModelFromWorkbook(wb: WorkBook): GroupModelSource;

declare const createMultiMatcher: <TItem>(term: KeyValue[], property: keyof TItem) => (item: TItem) => boolean;

declare const createMultiMultiMatcher: <TItem>(_term: KeyValue[], _property: keyof TItem) => (_item: TItem) => boolean;

declare function createName(name: string, prefix?: string): string;

declare function createNumberFormatter(locale: LocaleId, format?: NumberFormatString, fixFormat?: boolean): NumberFormatterFunction;

declare type CreateObjectOptions = {
    model: ObjectModel;
    createComponent: ComponentFactory;
};

declare const createTextMatcher: <TItem>(term: string, property: keyof TItem) => (item: TItem) => boolean;

declare function createThemeVariables(theme: Theme): ThemeVariables;

declare function createThemeVariablesCss(theme: Theme): CSSResult;

declare function createWorkbook(models: ExportableGridModel[], exportOptions?: ExportOptions): Promise<XLSXNS.WorkBook>;

declare function createWorksheet(model: GridModel, exportOptions?: ExportOptions): WorkSheet;

declare function csc(x: number): number;

declare function csch(x: number): number;

declare function css(strColor: string): string;

declare type CSSBorderStyle = 'none' | 'solid' | 'double' | 'dotted' | 'dashed';

declare type CSSStyle = Partial<CSSStyleDeclaration> & {
    [propName: string]: string;
};

declare function cssStyleFromString(strStyle: string): CSSStyle;

declare const cssStyleToStyle: (s: CSSStyle | string) => Style;

export declare namespace csv {
    export {
        arrayToCsv,
        csvToArray,
        CsvDelimiter,
        CsvQuote,
        CsvDescription,
        DEFAULT_CSV_DESCRIPTION,
        CsvReader
    }
}

declare type CsvDelimiter = ',' | ';' | '\t' | '|';

declare type CsvDescription = {
    delimiter: CsvDelimiter;
    quote: CsvQuote;
    encoding: string;
    decimalSeparator: '.' | ',';
    header: boolean;
};

declare type CsvQuote = '' | '"' | '\'';

declare class CsvReader {
    private csv;
    private offset;
    private length;
    private description;
    constructor(csv: string, description: Partial<CsvDescription>);
    get eof(): boolean;
    readLine(): string[];
}

declare function csvToArray(csv: string, csvDescription?: Partial<CsvDescription>): Matrix<string>;

declare type CustomProperties = Record<string, unknown>;

/**
 * @param color Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @param amount
 * @returns Color hex string
 */
declare function darken(color: string, amount?: number): string;

declare function date(year: number, month: number, day: number): number;

declare type DateArg = number | string | Date;

declare type DateFormatString = string;

declare type DateFormatterFunction = (date: number | string | Date, format?: string) => string;

declare namespace dateFunctions {
    export {
        datevalue,
        weekday,
        workday_2 as workday,
        today,
        isBlank,
        date,
        year,
        month,
        day,
        eomonth,
        isoweeknum
    }
}

export declare namespace dates {
    export {
        registerDateLocale,
        detectFormat,
        detectDefaultFormat,
        parse,
        getDateFormatter,
        getDateLocale,
        createDateFormatter,
        getFiscalYear,
        getFiscalQuarter,
        stripTime,
        getFiscalYearBounds,
        getFiscalISOWeek,
        dateToSerialDate,
        serialDateToDate,
        workday,
        DateFormatString,
        DateFormatterFunction
    }
}

declare function DateTimeRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

declare function dateToSerialDate(date: Date): number;

declare class DateTreeAdapter extends TreeAdapter {
    #private;
    static dateMap: Map<string, TreeSource>;
    constructor(options?: DateTreeAdapterOptions);
    getDates(): [Date, {
        y: number;
        q?: number;
        m?: number;
        w?: number;
        d: number;
        dw?: number;
    }][];
    getTree(): TreeSource;
}

declare type DateTreeAdapterOptions = {
    locale?: string;
    minDate?: Date | string;
    maxDate?: Date | string;
    monthOffset?: number;
    years?: DateTreeAdapterPeriodOptions | boolean;
    quarters?: DateTreeAdapterPeriodOptions | boolean;
    months?: DateTreeAdapterPeriodOptions | boolean;
    weeks?: DateTreeAdapterPeriodOptions | boolean;
    days?: DateTreeAdapterPeriodOptions | boolean;
};

declare type DateTreeAdapterPeriodOptions = {
    format?: dates.DateFormatString;
    collapsed?: boolean;
    selectable?: boolean;
    order?: 'asc' | 'desc';
};

declare function datevalue(date: DateArg): number;

declare function day(sn: DateArg): number;

declare function debounceOn<T extends Event>(elm: HTMLElement, event: string, selector: string, callback: OnCallbackFunction<T>, options?: {
    wait?: number;
    noMatchCallback?: OnCallbackFunction<T>;
} & Options_3<void>): HTMLElement;

declare type DecimalSeparator = '.' | ',';

declare function decodeColumn(letter: string): number;

declare function decodeRow(row: string): number;

declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare const _default: {
    PREFIX: string;
    DEFAULT_ACCENT_COLOR: string;
    DEFAULT_ACCENT_COLOR_2: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }> | ArrayLike<number> | {
        [key: string]: any;
    }>;
    SIZER_SIZE: number;
    SLIDER_SIZE: number;
    SLIDER_MIN_LENGTH: number;
    EXPANDER_SIZE: number;
    LIST_ITEM_HEIGHT: number;
    LIST_RENDERING_TRESHOLD: number;
    LIST_AUTOSCROLL_TRESHOLD: number;
    LIST_AUTOSCROLL_DELAY: number;
    DEFAULT_TEXT_HIGHLIGHT_COLOR: string;
    TOOLTIP_MARGIN: number;
    MENU_ITEM_HEIGHT: number;
    COLORPICKER_COLOR_SIZE: number;
    DEFAULT_NUMBER_FORMAT: string;
    FONT_SIZE: number;
};

declare const _default_2: {
    PREFIX: string;
    DEFAULT_ACCENT_COLOR: string;
    DEFAULT_ACCENT_COLOR_2: color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | color<string | number | any | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }> | ArrayLike<number> | {
    [key: string]: any;
    }>;
    SIZER_SIZE: number;
    SLIDER_SIZE: number;
    SLIDER_MIN_LENGTH: number;
    EXPANDER_SIZE: number;
    LIST_ITEM_HEIGHT: number;
    LIST_RENDERING_TRESHOLD: number;
    LIST_AUTOSCROLL_TRESHOLD: number;
    LIST_AUTOSCROLL_DELAY: number;
    DEFAULT_TEXT_HIGHLIGHT_COLOR: string;
    TOOLTIP_MARGIN: number;
    MENU_ITEM_HEIGHT: number;
    COLORPICKER_COLOR_SIZE: number;
    DEFAULT_NUMBER_FORMAT: string;
    FONT_SIZE: number;
    ROW_HEIGHT: number;
    RESIZE_TRESHOLD: number;
    ROW_HEADER_WIDTH: number;
    MAX_CACHE_ITEMS: number;
    CACHE_CLEAN_INTERVAL: number;
    COMMENT_HIDE_TIMEOUT: number;
    SELECTOR_BORDER_WIDTH: number;
    MIN_ROW_HEIGHT: number;
    MIN_COL_WIDTH: number;
    SPARKLINE_GAP: number;
    AUTOSCROLL_TRESHOLD: number;
    AUTOSCROLL_RATIO: number;
    AUTOSCROLL_INTERVAL: number;
    DEFAULT_SPARKLINE_OPTIONS: SparklineOptions;
    DEFAULT_OPTIONS: Options_5;
};

declare const DEFAULT_CSV_DESCRIPTION: CsvDescription;

declare function degrees(x: number): number;

declare type DeleteOptions = {
    index: number;
    count: number;
    dispatchEvent?: boolean;
    fromHistory?: boolean;
};

declare class Dependencies {
    readonly model: GridModel;
    private _cellDependencies;
    get cellDependencies(): DependencyMap;
    private _cellDependants;
    get cellDependants(): DependencyMap;
    private _rangeDependencies;
    get rangeDependencies(): DependencyMap;
    private _rangeDependants;
    get rangeDependants(): DependencyMap;
    private _sheetDependencies;
    get sheetDependencies(): SheetDependencyMap;
    private _sheetDependants;
    get sheetDependants(): SheetDependencyMap;
    constructor(model: GridModel);
    clear(): void;
    clearCellDependecies(addr: RangeAddress): this;
    has(cellAddr: CellAddress): boolean;
    add(cellAddr: CellAddress, dependentRangeAddr: RangeAddress, sheet?: string): void;
    getDependants(range: CellRange, map?: Map<CellRange, [CellModel, string?]>): Map<CellRange, [CellModel, string?]>;
    renameSheet(oldName: string, newName: string): void;
}

declare type DependencyMap = Map<string, Map<string, [CellRange, string?]>>;

declare function detectDefaultFormat(locale?: string): string;

/**
 * Primitive way to guess date format from string
 * @param date
 * @param locale
 * @return string
 */
declare function detectFormat(date: string, locale: string): "MM/dd/yyyy" | "dd.MM.yyyy" | "yyyy-MM-dd";

declare function detectOutlineColumnDirection(model: GridModel): 'left' | 'right';

declare function detectOutlineRowDirection(model: GridModel): 'above' | 'below';

declare function detectThemeType(): ThemeType;

declare type DiagonalDirection = 'ne' | 'nw' | 'se' | 'sw';

declare class Dialog extends LitElement implements Layout {
    static styles: CSSResult[];
    resizable: boolean;
    closable: boolean;
    scrollable: boolean;
    disableButtons: boolean;
    disableAutoclose: boolean;
    buttonPosition: VerticalPosition;
    alertPosition: VerticalPosition;
    component: HTMLElement;
    header: string;
    width: string | number;
    height: string | number;
    buttons: DialogButton[];
    loaderVisible: boolean;
    body: HTMLDivElement;
    loader: Overlay;
    alerts: DialogAlert[];
    private _parent;
    private _movingOffset;
    private _elementOffset;
    private _location;
    set location(value: DialogLocation);
    get location(): DialogLocation;
    layout(): void;
    _onKeyDown: (e: KeyboardEvent) => void;
    constructor();
    setOptions(options: DialogOptions): void;
    getOptions(): DialogOptions;
    firstUpdated(): void;
    submit(): void;
    addAlert(alert: DialogAlert): void;
    clearAlerts(): void;
    disconnectedCallback(): void;
    clearEvents(): void;
    _onParentMouseUp: () => void;
    _onHeaderMouseDown: (e: MouseEvent) => void;
    _onParentMouseMove: (e: MouseEvent) => void;
    _onClick: (btn: DialogButton) => void;
    showLoader(): void;
    hideLoader(): void;
    updated(props: Map<PropertyKey, unknown>): void;
    render: () => TemplateResult<1>;
    positionDialog(location: DialogLocation): void;
    open(parent: HTMLElement, location?: DialogLocation): void;
    close(dispatchEvent?: boolean): void;
}

declare type DialogAlert = {
    text: string;
    type: AlertType;
};

declare type DialogButton = 'ok' | 'cancel' | 'yes' | 'no' | 'close' | 'custom';

declare type DialogLocation = {
    x?: number | HorizontalPosition;
    y?: number | VerticalPosition;
} | 'center';

declare type DialogOptions = {
    header?: string;
    buttons?: DialogButton[];
    disableButtons?: boolean;
    disableAutoclose?: boolean;
    buttonPosition?: VerticalPosition;
    alertPosition?: VerticalPosition;
    closable?: boolean;
    resizable?: boolean;
    scrollable?: boolean;
    width?: string | number;
    height?: string | number;
    location?: DialogLocation;
};

declare type Direction = 'up' | 'right' | 'down' | 'left';

declare type DirectionalPosition = VerticalPosition | HorizontalPosition;

declare function dispatchActionEvent<TArgs>(target: EventTarget, scope: string, action: Action, args?: TArgs, init?: EventInit): void;

export declare namespace dom {
    export {
        createName,
        register,
        createElement,
        appendElement,
        showElement,
        hideElement,
        isHidden,
        showCell,
        hideCell,
        empty,
        remove,
        findParent,
        on,
        debounceOn,
        setClasses,
        getElementOffset,
        appendStyle,
        appendScript,
        numToPixels,
        setSize,
        setMaxSize,
        setMinSize,
        setPosition,
        setInset,
        setLineHeight,
        fixElementPosition,
        fixElementSize,
        setZIndex,
        setMargin,
        setPadding,
        setCenterPosition,
        setBorderWidth,
        fixPosition,
        zoomElement,
        measureText,
        px,
        query
    }
}

declare class Dropdown extends LitElement implements Layout {
    static styles: CSSResult[];
    alignment: 'left' | 'right';
    positionOffset: number;
    dropdownParent: HTMLElement;
    label: string | HTMLElement | TemplateResult;
    icon: IconSpec | string;
    width: number;
    color: ColorTypes;
    noCaret: boolean;
    labelElm: HTMLDivElement;
    private _contentElm;
    protected _dropdown: DropdownContainer;
    protected dropdownRef: Ref_2<DropdownContainer>;
    get dropdown(): DropdownContainer;
    get isOpen(): boolean;
    updated(): void;
    constructor();
    _onDocumentMouseDown: (e: MouseEvent) => void;
    open(): Promise<void>;
    close(): void;
    toggle(): void;
    _onMousedown: () => Promise<void>;
    disconnectedCallback(): void;
    renderDropdown: () => TemplateResult<1>;
    renderLabel: () => DirectiveResult<UnsafeHTMLDirective>;
    render: () => TemplateResult<1>;
    layout(): void;
}

declare class DropdownColorPicker extends Dropdown {
    static styles: CSSResult[];
    value: string;
    _picker: ColorPicker;
    get picker(): ColorPicker;
    updateLabel(): void;
    willUpdate(): void;
    constructor();
}

declare class DropdownContainer extends LitElement {
    static styles: CSSResult;
    constructor();
    render: () => TemplateResult<1>;
}

declare class DropdownEvent extends Event {
    constructor(event: string);
}

declare class DropdownList extends DropdownMenu {
    value: string | number | boolean;
    constructor();
    open(): Promise<void>;
    willUpdate(props: Map<string, unknown>): void;
}

declare class DropdownMenu extends Dropdown {
    #private;
    items: MenuItem[];
    dynamicWidth: boolean;
    get menu(): Menu;
    constructor();
    updated(): void;
}

declare function DropdownRenderer(div: HTMLDivElement, cell: CellModel, opts?: {
    default: boolean;
}): HTMLDivElement;

declare type EditingOptions = {
    /** enable inserting new rows */
    rowInsertion: boolean;
    /** enable deleting rows */
    rowDeletion: boolean;
    /** enable editing row outline levels */
    rowOutline: boolean;
    /** enable inserting new columns */
    colInsertion: boolean;
    /** enable deleting columns */
    colDeletion: boolean;
    /** enable editing colun outline levels */
    colOutline: boolean;
};

declare class Editor extends LitElement implements Layout, ComponentContainer {
    static styles: CSSResult[];
    formulaBar: EditorFormula;
    container: SplitContainer;
    toolbar: EditorToolbar;
    statusbar: EditorStatusbar;
    overlay: Overlay;
    enableDrag: boolean;
    model: GroupModel;
    createComponent: ComponentFactory<LitElement>;
    toolbarDisabled: boolean;
    statusbarDisabled: boolean;
    formulabarDisabled: boolean;
    options: Options_4;
    rightSidebarComponent: SidebarComponentType;
    gridElements: ElementModel[];
    activeRange: CellRange;
    activeGrid: Grid;
    activeModel: GridModel;
    gridContainer: GridGroup;
    get group(): GridGroup;
    private commandWindowRef;
    get commandWindow(): CommandWindow;
    private tabMenuRef;
    get tabMenu(): Menu;
    private activeMenuSheet;
    readonly plugins: Plugins<Editor>;
    readonly commands: Commands;
    readonly sidebarComponents: ComponentStore<SidebarComponent>;
    constructor();
    updateOptions(options: Partial<Options_4>): void;
    _onDragover: (e: DragEvent) => void;
    connectedCallback(): void;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    updated(props: Map<PropertyKey, unknown>): void;
    updateComponents(): void;
    setSourceData(sourceData: GroupModelSource): void;
    getCommands(): Commands;
    updateCommands(): void;
    layout(): void;
    updateSelectedRange(range: CellRange): void;
    activateGrid(grid: Grid): void;
    _onGridSelect: (e: GridEvent) => Promise<void>;
    _onGridEdit: (e: GridEditEvent) => void;
    registerPlugin(plugin: Plugin_2<Editor>): void;
    _onTabContextMenu: (e: TabEvent) => void;
    createGridContainer: () => GridGroup;
    getGridContainer(): GridGroup;
    createDefaultComponent: ComponentFactory;
    _onToolbarAction: (_e: actions.ActionEvent) => void;
    _onCommandsOpen: () => void;
    _onTabMenuItemSelect: (e: ListSelectEvent) => void;
    render: () => TemplateResult<1>;
}

export declare namespace editor {
    export {
        Options_4 as EditorOptions,
        ConfigForm,
        SidebarComponent,
        SidebarComponentType,
        EditorEvent,
        Editor,
        EditorZoom,
        EditorFormula,
        GridStats,
        StatusBarComponent,
        EditorStatusbar,
        EditorToolbar,
        HeaderForm,
        NamesForm,
        RuleForm,
        RuleList,
        RuleThreshold,
        StyleForm,
        SparklineForm
    }
}

declare class EditorEvent extends Event {
    readonly editor: Editor;
    constructor(type: string, args?: Partial<EditorEvent>);
}

declare class EditorFormula extends LitElement {
    static styles: CSSResult[];
    grid: Grid;
    gridElement: ElementModel;
    addressInput: HTMLInputElement;
    formulaInput: FormulaInput;
    private isInputActive;
    get gridElementValue(): string;
    _onGridSelectorUpdate: (e: SelectorEvent) => void;
    _onGridSelect: (e: GridEvent) => void;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    _onInputPreview: (e: FormulaInputEvent) => void;
    commit(): void;
    _onInputCommit: () => void;
    _onInputDiscard: () => void;
    _onAddressFocus: () => void;
    _onInputFocus: () => void;
    _onInput: () => void;
    render: () => TemplateResult<1>;
}

declare class EditorStatusbar extends LitElement {
    components: Map<ComponentId, StatusBarComponent>;
    group: GridGroup;
    grid: Grid;
    range: CellRange;
    _onGridEdit: (_e: GridEditEvent) => void;
    willUpdate(_props: Map<PropertyKey, unknown>): void;
    createComponent: (id: ComponentId) => StatusBarComponent;
    render: () => TemplateResult<1>;
}

declare class EditorToolbar extends LitElement {
    static styles: CSSResult[];
    toolbar1: Toolbar;
    toolbar2: Toolbar;
    toolbar3: Toolbar;
    toolbar4: Toolbar;
    grid: Grid;
    editor: Editor;
    gridElements: ElementModel[];
    toolbar1Config: ToolbarItem[];
    toolbar2Config: ToolbarItem[];
    toolbar3Config: ToolbarItem[];
    toolbar4Config: ToolbarItem[];
    get gridElement(): ElementModel;
    _borderColor: string;
    filterToolbarItems(items: ToolbarItem[]): ToolbarItem[];
    getToolbar1Config(): ToolbarItem[];
    getToolbar2Config(): ToolbarItem[];
    getToolbar3Config(): ToolbarItem[];
    getToolbar4Config(): ToolbarItem[];
    _onGridEdit: (_e: GridEditEvent) => void;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    firstUpdated(): void;
    getToolbarValues(): Record<string, unknown>;
    getCellBorderStyles(element: ElementModel, range: CellRange, value: {
        top?: Border;
        right?: Border;
        bottom?: Border;
        left?: Border;
    }, borderType: string): Record<keyof Style, unknown>;
    applyProperty(target: ElementModel, action: actions.Action, value: unknown, isStyleProperty: boolean): void;
    updateToolbar(): Promise<void>;
    _onToolbarAction: (e: actions.ActionEvent) => void;
    render: () => TemplateResult<1>;
}

declare class EditorZoom extends LitElement {
    static styles: CSSResult[];
    group: GridGroup;
    slider: Slider;
    translateValue(value: number): number;
    updateText(value: number): void;
    _onSlideStart: (_e: SlideEvent) => void;
    _onSlide: (e: SlideEvent) => void;
    _onSlideEnd: (e: SlideEvent) => void;
    updated(): Promise<void>;
    render: () => TemplateResult<1>;
}

declare type EditType = 'value' | 'style' | 'insert_row' | 'insert_column' | 'delete_row' | 'delete_column' | 'move_row' | 'move_column' | 'autofill';

declare class ElementCache {
    private maxCacheItems;
    private table;
    private queue;
    disabled: boolean;
    constructor(columns: number, rows: number, maxCacheItems?: number);
    get(c: number, r: number): HTMLElement;
    delete(c: number, r: number): this;
    deleteColumn(c: number): this;
    deleteRow(r: number): this;
    set(c: number, r: number, content: HTMLElement): void;
    clear(): void;
    clean(): void;
}

declare class ElementModel {
    readonly model: GridModel;
    get address(): string;
    protected _renderer: Renderer;
    get renderer(): Renderer;
    set renderer(renderer: Renderer);
    protected _afterRenderer: Renderer;
    get afterRenderer(): Renderer;
    set afterRenderer(afterRenderer: Renderer);
    protected _commentRenderer: CommentRenderer;
    get commentRenderer(): CommentRenderer;
    set commentRenderer(commentRenderer: CommentRenderer);
    protected _type: CellType;
    get type(): CellType;
    set type(v: CellType);
    protected _name: string;
    get name(): string;
    set name(v: string);
    protected _style: number;
    get style(): number;
    set style(v: number);
    protected _commentable: boolean;
    get commentable(): boolean;
    set commentable(v: boolean);
    protected _clickable: boolean;
    get clickable(): boolean;
    set clickable(v: boolean);
    protected _editable: boolean;
    get editable(): boolean;
    set editable(v: boolean);
    protected _allowInvalid: boolean;
    get allowInvalid(): boolean;
    set allowInvalid(v: boolean);
    protected _formula: string;
    get hasFormula(): boolean;
    get formula(): string;
    set formula(v: string);
    get value2(): string | unknown;
    protected _editorContent: unknown;
    get editorContent(): unknown;
    set editorContent(v: unknown);
    protected _adapter: ComponentAdapter;
    get adapter(): ComponentAdapter;
    set adapter(v: ComponentAdapter);
    protected _properties: CustomProperties;
    get properties(): CustomProperties;
    set properties(v: CustomProperties);
    getProperty(key: string): unknown;
    setProperty(key: string, value: unknown): void;
    protected _valueFormatter: ValueFormatter;
    protected _format: numbers.NumberFormatString;
    get format(): numbers.NumberFormatString;
    set format(v: numbers.NumberFormatString);
    get valueFormatter(): ValueFormatter;
    constructor(model: GridModel, source?: ElementSource);
    populate(source: ElementSource): void;
    getSourceData(): ElementSource;
    setStyleProperties(props: Record<StylePropertyKey, unknown>, updateEixistingStyle?: boolean): void;
    removeStyleProperties(props: string[]): void;
    get composedStyle(): Style;
}

/**
 * Source object type for grid element.
 * Common ancestor for ColumnSource, RowSource and CellSource.
 */
declare type ElementSource = {
    /** cell type */
    t?: CellType;
    /** style */
    s?: StyleSource;
    /** enable cell editing */
    e?: boolean;
    /** number format */
    z?: numbers.NumberFormatString;
    /** formula */
    f?: string;
    /** range name */
    name?: string;
    /** custom properties */
    props?: CustomProperties;
    /** cell editor content */
    content?: unknown;
    /** cell editor adapter */
    adapter?: ComponentAdapter;
    /** enable cell commenting */
    commentable?: boolean;
    /** enable cell clicking */
    clickable?: boolean;
    /** cell renderer */
    renderer?: Renderer;
    /** cell renderer applied after initial renderer */
    afterRenderer?: Renderer;
    /** comment content renderer */
    commentRenderer?: CommentRenderer;
    /** allow invalid cell values */
    allowInvalid?: boolean;
};

declare function empty(elm: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot;

declare function encodeColumn(column: number): string;

declare function encodeRow(row: number): string;

declare function eomonth(sn: DateArg, months: number): number;

declare function erfc(y: number): number;

declare function escapeHTML(text: string): string;

declare function escapeRegExp(value: string): string;

declare function even(x: number): number;

declare type EventOptions = {
    /** grid click event options */
    click: {
        /** maximum mouse move path length, after click event is allowed */
        mouseMoveTreshold: number;
    };
};

export declare namespace events {
    export {
        ChangeEvent,
        AddEvent,
        SerialzieEvent
    }
}

declare function exp(x: number): number;

declare class Expander extends LitElement {
    static styles: CSSResult[];
    state: ExpanderState;
    collapsedImage: string;
    expandedImage: string;
    toggle: () => "open" | "closed";
    constructor();
    render: () => TemplateResult<1>;
}

declare type ExpanderState = 'open' | 'closed' | 'waiting';

declare class ExpandEvent extends Event {
    readonly state?: ExpanderState;
    get collapsed(): boolean;
    get closed(): boolean;
    constructor(state?: ExpanderState);
}

declare type ExportableGridModel = GridModel & {
    exportOptions?: ExportOptions;
};

declare type ExportOptions = {
    exportHiddenRows?: boolean;
    exportHiddenColumns?: boolean;
    gridLines?: boolean;
    defaultBorders?: boolean | CellBorderStyle;
};

declare function exportXLSX(wb: WorkBook, filename?: string): Promise<any>;

declare type ExpressionNode = {
    /** token */
    t: string;
    /** token type */
    tt: TokenType;
    /** sheet */
    s?: string;
    /** children */
    c?: ExpressionNode[];
};

declare function extrapolateFormulas(cell: CellModel, direction: Direction, count: number): string[];

declare function extrapolateValues(source: CellModel[], count: number): unknown[];

declare function fact(x: number): number;

declare function factdouble(x: number): number;

declare function _false(): boolean;

declare class FileInput extends LitElement {
    static styles: CSSResult[];
    disabled: boolean;
    value: File;
    input: HTMLInputElement;
    extensions: string[] | string;
    dragging: boolean;
    dropping: boolean;
    constructor();
    willUpdate(props: Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _onWindowDragOver: (e: DragEvent) => void;
    _onWindowDragLeave: (e: DragEvent) => void;
    _onWindowDrop: (e: DragEvent) => void;
    _onDragOver: (e: DragEvent) => void;
    _onDragLeave: (e: DragEvent) => void;
    _onDrop: (e: DragEvent) => void;
    _onClick: () => void;
    updateValue(file: File): void;
    render: () => TemplateResult<1>;
}

declare function filter(range: Matrix, boolRange: Matrix): unknown[];

declare type FilterColumnOptions = {
    /** property by which to filter */
    property?: keyof CellModel;
    /** enable filter */
    enabled: boolean;
};

declare class FilterEvent extends Event {
    constructor();
}

declare class FilterLabel extends LitElement {
    static styles: CSSResult;
    value: FilterValue;
    constructor();
    connectedCallback(): void;
    render: () => TemplateResult<1>;
}

declare type FilterMatcher = (cell: CellModel) => boolean;

declare class FilterModel {
    model: TreeModel;
    private _term;
    private _property;
    get term(): string;
    get hasFilter(): boolean;
    constructor(model: TreeModel);
    filter(term: string): void;
    clear(): void;
}

declare class FilterModel_2 extends EventTarget {
    model: GridModel;
    readonly settings: Map<number, FilterSettings>;
    custom: boolean;
    constructor(model: GridModel);
    get(c: number): FilterSettings;
    filter(filter: FilterSettings, dispatchEvent?: boolean): void;
    applyFilter(dispatchEvent?: boolean): void;
    resetFilter(dispatchEvent?: boolean): void;
}

declare type FilterOptions = {
    enabled?: boolean;
    /** the parents of the matched rows will be included in the results */
    includeParents?: boolean;
    /** the children of the matched rows will be included in the results */
    includeChildren?: boolean;
};

declare type FilterSettings = {
    c: number;
    term: FilterValue;
};

declare enum FilterState {
    Filtered = 0,
    Matched = 1,
    ChildMatched = 2,
    ParentMatched = 3
}

declare type FilterValue = string | number | boolean | KeyValue[];

declare function findParent(elm: HTMLElement, selector: string): HTMLElement;

declare function fixElementPosition(elm: HTMLElement, offsetElement?: HTMLElement): void;

declare function fixElementSize(elm: HTMLElement, container?: HTMLElement): void;

declare function fixNumberFormat(format: string, type: FormatType): string;

declare function fixPosition(pos: {
    x: number;
    y: number;
    w: number;
    h: number;
}, container: HTMLElement): {
    x: number;
    y: number;
};

declare function floor(x: number): number;

declare type FolderOptions = {
    openIcon?: IconSpec | string;
    closedIcon?: IconSpec | string;
};

declare class Form extends LitElement {
    static styles: CSSResult[];
    key: string | number;
    adapter: FormAdapter;
    model: FormModel;
    caption: string;
    controlNodes: NodeListOf<IControl>;
    controls: Map<string, IControl>;
    rowElms: HTMLTableRowElement[];
    values: FormValues;
    private errorCounts;
    setSourceData(sourceData: FormSettings): void;
    resetValues(): void;
    setValue(key: string, value: unknown): void;
    reset(): Promise<void>;
    validate(): void;
    isValid(): boolean;
    initAdapter(): Promise<void>;
    willUpdate(changedProps: Map<PropertyKey, unknown>): Promise<void>;
    updated(): void;
    _onValueChange(e: ControlEvent<unknown>): void;
    render: () => TemplateResult;
}

export declare namespace form {
    export {
        FormEvent,
        Form,
        FormContainer,
        FormTextInput,
        FormColorInput,
        FormDateInput,
        CalendarDateInput,
        FormNumericInput,
        FormFileInput,
        FormCheckbox,
        FormLabel,
        FormList,
        FormButton,
        FormControlType,
        FormControlProperties,
        FormAlert,
        FormRow,
        FormColumn,
        FormGridModel,
        FormOptions,
        FormContainerOptions,
        FormSettings,
        FormButtonConfig,
        FormButtonType,
        FormAction,
        FormValues,
        FormAdapter,
        FormModel,
        FormControlModel
    }
}

declare type FormAction = FormButtonType;

declare abstract class FormAdapter extends ComponentAdapter<Form> {
    getForms(): FormSettings[] | Promise<FormSettings[]>;
    getRows(id: string | number): FormRow[] | Promise<FormRow[]>;
    getColumns(id: string | number): FormColumn[] | Promise<FormColumn[]>;
    abstract getControls(id: string | number): FormControlProperties[] | Promise<FormControlProperties[]>;
    save(values: Map<string | number, FormValues>): boolean | FormAlert[] | Promise<boolean | FormAlert[]>;
    getOptions(): FormContainerOptions | Promise<FormContainerOptions>;
    onAction(action: string): void;
}

declare type FormAlert = {
    text: string;
    type: AlertType;
};

declare type FormatType = 'd' | 'n';

declare class FormButton extends Button implements IControl<string> {
    static styles: CSSResult[];
    model: FormControlModel;
    adapter: null;
    value: string;
    constructor();
    protected updateValue(value: string, dispatchEvent?: boolean): void;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    reset(): void;
    validate(): void;
    get isValid(): boolean;
}

declare type FormButtonConfig = {
    key?: string;
    icon?: IconSpec | string;
    text: string;
    default?: boolean;
    color?: ColorTypes;
};

declare type FormButtonType = "save" | "reset" | "validate" | "storno" | "close" | FormButtonConfig;

declare class FormCheckbox extends BaseControl<boolean> {
    get isValid(): boolean;
    constructor();
    render: () => TemplateResult<1>;
}

declare class FormColorInput extends BaseControl<string> {
    static styles: CSSResult[];
    _onSelect: (e: ColorPickerEvent) => void;
    render: () => TemplateResult<1>;
}

declare type FormColumn = {
    width?: number;
};

declare class FormContainer extends LitElement {
    static styles: CSSResult[];
    config: FormSettings[];
    options: FormContainerOptions;
    collapsibleForms: boolean;
    adapter: FormAdapter;
    alerts: FormAlert[];
    overlay: Overlay;
    forms: NodeListOf<Form>;
    private _saving;
    constructor();
    connectedCallback(): void;
    get values(): Map<string | number, FormValues>;
    setSourceData(config: FormSettings[], options?: Partial<FormContainerOptions>): void;
    reset(dispatchEvent?: boolean): void;
    isValid(): boolean;
    save(dispatchEvent?: boolean): Promise<boolean>;
    _onButtonClick: (btn: FormButtonConfig) => void;
    initAdapter(): Promise<void>;
    willUpdate(changedProps: Map<PropertyKey, unknown>): Promise<void>;
    renderButton: (type: FormButtonType) => TemplateResult<1>;
    render: () => TemplateResult<1>;
}

declare type FormContainerOptions = {
    caption?: string;
    buttonsPosition?: VerticalPosition;
    alertsPosition?: VerticalPosition;
    buttons?: FormButtonType[];
    formOptions?: FormOptions;
    closeAfterSave?: boolean;
} & Options;

declare class FormControlModel {
    readonly props: FormControlProperties;
    readonly dependencies: FormControlModel[];
    errors: string[];
    constructor(props: FormControlProperties);
    get key(): string;
}

declare type FormControlProperties = {
    /** Row index within form grid */
    row: number;
    /** Column index within form grid */
    col: number;
    /** Unique field identifier */
    key?: string;
    /** Key of bound form control */
    for?: string;
    /** Value validation pattern */
    pattern?: RegExp;
    /** Form control type */
    type?: FormControlType;
    /** Required field */
    required?: boolean;
    /** Readonly control */
    readOnly?: boolean;
    /** Current control value */
    value?: unknown;
    /** Key of parent element */
    dependsOn?: string;
    /** Component adapter where applicable (eg. TreeSelect) */
    adapter?: ComponentAdapter;
    /** Component item definition */
    content?: unknown;
    /** colspan */
    cs?: number;
    /** rowspan */
    rs?: number;
    /** control-specific options */
    options?: Record<string, unknown>;
    placeholder?: string;
    caption?: string;
};

declare enum FormControlType {
    TextInput = "text",
    Button = "button",
    NumericInput = "number",
    DateInput = "date",
    CalendarDateInput = "calendar",
    Checkbox = "checkbox",
    Label = "label",
    List = "list",
    ColorInput = "color",
    FileInput = "file"
}

declare class FormDateInput extends BaseControl<Date | string> {
    #private;
    static styles: CSSResult[];
    get dateAdapter(): DateTreeAdapter;
    get treeValue(): SerializedValue[];
    _onChange: (e: TreeEvent) => void;
    render: () => TemplateResult<1>;
}

declare class FormEvent extends Event {
    readonly key: string;
    readonly value: unknown;
    readonly valid?: boolean;
    constructor(type: string, args?: Partial<FormEvent>);
}

declare class FormFileInput extends BaseControl<File> {
    static styles: CSSResult[];
    render: () => TemplateResult<1>;
}

declare type FormGridModel = {
    rows: FormRow[];
    columns: FormColumn[];
};

declare class FormLabel extends BaseControl<string> {
    static styles: CSSResult[];
    render: () => TemplateResult<1>;
}

declare class FormList extends BaseControl<SerializedValue[] | string, TreeAdapter> {
    dropdown: TreeDropdown;
    private _firstOpen;
    get isValid(): boolean;
    private formatValue;
    reset(): void;
    _onChange: (e: TreeEvent) => void;
    _onDropdownOpen: () => void;
    getAdapter(): TreeAdapter;
    willUpdate(): Promise<void>;
    updated(): Promise<void>;
    render: () => TemplateResult<1>;
}

declare class FormModel {
    options: FormOptions;
    controls: FormControlModel[][];
    rows: FormRow[];
    columns: FormColumn[];
    private _rowCount;
    private _colCount;
    get rowCount(): number;
    get colCount(): number;
    readonly controlMap: Map<string, FormControlModel>;
    get(key: string): FormControlModel;
    constructor(sourceData: FormSettings);
    populate(sourceData: FormSettings): void;
}

declare class FormNumericInput extends BaseControl<number> {
    static styles: CSSResult[];
    min: number;
    max: number;
    validate(): void;
    constructor();
    _onKeydown: (e: KeyboardEvent) => void;
    _onChange: (e: InputEvent) => void;
    updateValue(value: number): void;
    up: () => void;
    down: () => void;
    render: () => TemplateResult<1>;
}

declare type FormOptions = {
    treeAdapter?: TreeAdapter;
};

declare type FormRow = {
    height?: number;
};

declare type FormSettings = {
    key?: string | number;
    caption?: string;
    treeAdapter?: TreeAdapter;
    controls?: FormControlProperties[];
    columns?: FormColumn[];
    rows?: FormRow[];
    options?: FormOptions;
};

declare class FormTextInput extends BaseControl<string> {
    static styles: CSSResult[];
    validate(): void;
    _onChange: (e: InputEvent) => void;
    _onKeyDown: (e: KeyboardEvent) => void;
    render: () => TemplateResult<1>;
}

declare class Formula {
    private expression;
    readonly tokenizer: Tokenizer;
    private _formula;
    private _xlFormula;
    private _variables;
    private _cells;
    private _ranges;
    private _fn;
    get fn(): FormulaFunction;
    private _tokens;
    get tokens(): Token[];
    get variables(): [number, string, string?][];
    get cells(): [number, CellRange, string?][];
    get ranges(): [number, CellRange, string?][];
    private _colors;
    get colors(): Map<string, FormulaColorItem>;
    constructor(expression: FormulaString, tokenizer: Tokenizer);
    findTokenIndexAtPosition(pos: number): number;
    /**
     * Finds sheet token for the given reange token index
     *
     * @param tokenIndex
     */
    findSheetTokenIndex(tokenIndex: number): number;
    /**
     * Removes sheet token for the given token index (range or sheet itself)
     * @param tokenIndex
     * @returns number of tokens removed
     */
    removeSheetToken(tokenIndex: number): number;
    getNamedColor(name: string): string;
    getTokenPosition(index: number): {
        min: number;
        max: number;
    };
    updateToken(index: number, newValue: string): void;
    removeToken(index: number): void;
    /**
     * Inserts a new token at the given index
     * @param index
     * @param value
     * @param type
     * @returns number of inserted tokens
     */
    insertToken(index: number, value: string, type: TokenType): number;
    clone(): Formula;
    updateDependecies(): void;
    createFormulaString(html?: boolean, fnPrefixes?: boolean): string;
    createExpressionTree(): ExpressionNode;
    createExpressionJSCode(node: ExpressionNode, parent?: ExpressionNode, arrayMode?: boolean): string;
    compile(): string;
    toString(prefix?: boolean): string;
    toExcelString(): string;
    shift(options: ShiftOptions): this;
    hasSheetReference(sheet: string): boolean;
    renameSheet(oldName: string, newName: string): boolean;
}

declare type FormulaColorItem = {
    color: string;
    address: string;
    sheet?: string;
    type: TokenType;
    tokenIndex: number;
};

declare type FormulaContext = {
    cell: CellModel;
    formula: Formula;
};

declare type FormulaFuncDescription = {
    name: string;
    params: FormulaFuncParamDescription[];
    returns: string;
    description: string;
    links: string[];
};

declare type FormulaFuncGroupDescription = {
    name: string;
    functions: FormulaFuncDescription[];
};

declare type FormulaFuncParamDescription = {
    name: string;
    type: string;
    description: string;
    optional: boolean;
    default?: string;
};

declare type FormulaFunction = (...args: unknown[]) => unknown;

declare class FormulaInput extends LitElement {
    static styles: CSSResult[];
    tokenizer: Tokenizer;
    formulaPreview: HTMLDivElement;
    formulaInput: HTMLInputElement;
    preview: boolean;
    get formula(): Formula;
    private _value;
    private _isDiscarded;
    get isDiscarded(): boolean;
    set value(v: string);
    get value(): string;
    private origWidth;
    private hasInput;
    private _selection;
    get selection(): {
        start: number;
        end: number;
    };
    set selection(v: {
        start: number;
        end: number;
    });
    get inputValue(): string;
    constructor();
    connectedCallback(): void;
    activate(value: string): void;
    debounceUpdatePreview: {
        (this: unknown, ...args: [] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    updateSize(): void;
    updatePreview(): void;
    willUpdate(): void;
    updated(): void;
    setRange(range: CellRange, index?: number): void;
    commit(dispatchEvent?: boolean): void;
    discard(dispatchEvent?: boolean): void;
    _onInput: () => void;
    _onMouseUp: () => void;
    _onMouseDown: () => void;
    _onKeyUp: () => void;
    _onKeyDown: (e: KeyboardEvent) => void;
    _onBlur: () => void;
    _onFocus: () => void;
    focus(): void;
    render: () => TemplateResult<1>;
}

declare class FormulaInputEvent extends Event {
    value: string;
    formula: Formula;
    constructor(type: string, args?: Partial<FormulaInputEvent>);
}

declare type FormulaString = string;

declare function formulatext(): string;

declare type FormValues = Record<string, unknown>;

export declare namespace functions {
    export {
        _map,
        textFunctions as text,
        dateFunctions as date,
        mathFunctions as math,
        lookupFunctions as lookup,
        specialFunctions as special,
        logicalFunctions as logical,
        statisticalFunctions as statistical
    }
}

declare function GeneralRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

declare function getCellRenderer(cell: CellModel): Renderer;

/**
 * @param color Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @returns Color hex string
 */
declare function getComplmentaryColor(color: string): string;

declare function getDateFormatter(locale: string, format?: DateFormatString): DateFormatterFunction;

declare function getDateLocale(code: string): Locale;

declare const getDefaultOptions: () => Partial<Options>;

declare function getElementOffset(elm: HTMLElement, offsetElm: HTMLElement): {
    top: number;
    left: number;
};

declare function getFiscalISOWeek(date: Date, monthOffset?: number, firstDayOfWeek?: number): [number, number];

declare function getFiscalQuarter(date: Date, monthOffset: number): number;

declare function getFiscalYear(date: Date, monthOffset: number): number;

declare function getFiscalYearBounds(date: Date, monthOffset: number): [Date, Date];

declare function getISOCode(code: string): string;

declare function getLocalDecimalSeparator(locale: LocaleId): DecimalSeparator;

declare function getLocale(): string;

declare function getLogger(name?: string): Logger;

declare function getNumberFormatter(locale: LocaleId, format?: NumberFormatString, fixFormat?: boolean): NumberFormatterFunction;

declare function getRegionISOCode(code: string): string;

declare function getSystemLocale(): string;

declare function getThemeManager(): ThemeManager;

declare function getWorkbookNames(wb: WorkBook): Names;

declare function getWorksheetCells(model: GridModel, exportOptions?: ExportOptions): CellObject[][];

declare function getWorksheetColumns(model: GridModel, exportOptions: ExportOptions): ColInfo[];

declare function getWorksheetConditionalFormats(model: GridModel): ConditionalFormat_2[];

declare function getWorksheetHeaderCells(model: GridModel, exportOptions: ExportOptions): CellObject[][];

declare function getWorksheetMerges(model: GridModel, exportOptions: ExportOptions): Range_2[];

declare function getWorksheetRows(model: GridModel, exportOptions: ExportOptions): RowInfo[];

declare type GradientStop = {
    v: number;
    rgb: Color_2;
};

declare class Grid extends LitElement implements Layout {
    static styles: CSSResult[];
    private tableRef;
    get table(): Table;
    private hSliderRef;
    get hSlider(): Slider;
    private vSliderRef;
    get vSlider(): Slider;
    private hSizerRef;
    get hSizer(): Sizer;
    private vSizerRef;
    get vSizer(): Sizer;
    private selectorRef;
    get selector(): Selector;
    private copySelectorRef;
    get copySelector(): Selector;
    private formulaSelectorRef;
    get formulaSelector(): Selector;
    private commandWindowRef;
    get commandWindow(): CommandWindow;
    private contextMenuRef;
    get contextMenu(): Menu;
    private tooltipRef;
    get tooltip(): GridTooltip;
    private commentRef;
    get comment(): Comment_2;
    get designMode(): boolean;
    model: GridModel;
    adapter: GridAdapter;
    selection: SelectionModel;
    options: Options_5;
    logger: log.Logger;
    zoom: number;
    group: GridGroup;
    history: History_2;
    rendering: GridRendering;
    selecting: GridSelecting;
    events: GridEvents;
    editing: GridEditing;
    filtering: GridFiltering;
    sorting: GridSorting;
    menus: GridMenus;
    objects: GridObjects;
    commands: Commands;
    plugins: Plugins<Grid>;
    loading: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    destroy(): void;
    initAdapter(): Promise<void>;
    updateOptions(options: Partial<Options_5>): void;
    render: () => TemplateResult<1>;
    firstUpdated(): Promise<void>;
    updated(changedProps: Map<PropertyKey, unknown>): Promise<void>;
    innerLayout(): void;
    debounceInnerLayout: {
        (this: unknown, ...args: [] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    layout(): void;
    setSourceData(data: GridSource): void;
    willUpdate(changedProps: Map<PropertyKey, unknown>): void;
    focus(options?: FocusOptions): void;
    refresh(): Promise<void>;
    createEvent<TEvent extends GridEvent>(type: string, args?: Partial<TEvent>, event?: AnyConstructor<TEvent>): TEvent;
    dispatchGridEvent<TEvent extends GridEvent>(type: string, args?: Partial<TEvent>, event?: AnyConstructor<TEvent>): void;
    getConnectedGrid(name: string): Grid;
    getSourceData(): GridSource;
}

export declare namespace grid {
    export {
        renderers,
        initGridCommands,
        createGroupCommands,
        ElementCache,
        FilterLabel,
        FormulaInputEvent,
        FormulaInput,
        Grid,
        DeleteOptions,
        InsertOptions,
        MovingOptions,
        GridEditing,
        GridEvent,
        GridEditEvent,
        GridResizeEvent,
        GridColumnResizeEvent,
        GridRowResizeEvent,
        GridEvents,
        GridFiltering,
        RefreshOptions,
        GridRendering,
        GridSelecting,
        GridSorting,
        GroupOptions,
        GridGroupEvent,
        GridGroup,
        ObjectEvent,
        ObjectHost,
        SelectorEvent,
        SelectorMoveEvent,
        Selector,
        Sparkline,
        SortingArrow,
        TableCell,
        TableRow,
        TableHeaderCell,
        TableRenderOptions,
        TableEvent,
        Table,
        GridTooltip,
        CommentEvent,
        Comment_2 as Comment,
        GroupModelSource,
        RequestFilters,
        GridAdapter,
        _default_2 as gridConstants,
        utils_2 as utils,
        functions,
        FormulaString,
        FormulaContext,
        FormulaColorItem,
        isFormula,
        prefixFormula,
        stripFormulaPrefix,
        Formula,
        CalculationContext,
        extrapolateValues,
        extrapolateFormulas,
        autofill,
        TokenType,
        Token,
        isOperand,
        isNumber_2 as isNumber,
        isBool_2 as isBool,
        isLetter,
        TokenizationOptions,
        Tokenizer,
        scalarOperation,
        matrixOperation,
        ArythmeticOperator,
        LogicalOperataor,
        Operator,
        OperatorSpec,
        operatorMap,
        isLogicalOperator,
        isArythmeticOperator,
        isOperator,
        encodeRow,
        decodeRow,
        encodeColumn,
        decodeColumn,
        sortRanges,
        Coords,
        RangeCoords,
        RangeAddress,
        CellAddress,
        CellRange,
        CellSource,
        CellModel,
        ColumnHeaderModel,
        FilterColumnOptions,
        ColumnSource,
        ColumnModel,
        SortOrder,
        SortSettings,
        SortingModel,
        CommentSource,
        CommentOptions,
        CommentItem,
        CommentModel,
        CalculationModel,
        ConditionalFormatTypeDiffStyle,
        ConditionalFormatTypeNoDiff,
        ConditionalFormatIconType,
        ConditionalFormatIconSetDefinition,
        ConditionalFormatType,
        ConditionalFormatBoundryType,
        ConditionalFormatBoundry,
        ConditionalFormatThresholdType,
        ConditionalFormatThresholdItem,
        ConditionalFormatItemSource,
        ConditionalFormatSource,
        ConditionalFormat,
        CellConditionalFormat,
        iconSets,
        ConditionalFormats,
        cssStyleFromString,
        convertCSSVerticalAlignment,
        convertCSSColor,
        CSSStyle,
        CSSBorderStyle,
        borderStyleCSSMap,
        borderCSSStyleMap,
        convertCSSBorder,
        convertToCSSBorder,
        addPattern,
        addGradient,
        styleToCSStyle,
        cssStyleToStyle,
        DependencyMap,
        SheetDependencyMap,
        Dependencies,
        ElementSource,
        ElementModel,
        FilterMatcher,
        FilterSettings,
        createTextMatcher,
        createBoolMatcher,
        createMultiMatcher,
        createMultiMultiMatcher,
        createCellMatcher,
        FilterEvent,
        FilterModel_2 as FilterModel,
        GridSource,
        Viewport,
        Merge,
        GridModel,
        GroupModel,
        HistoryItem,
        History_2 as History,
        IterableRange,
        IterableAddressRange,
        initOptions_2 as initOptions,
        ViewMode,
        EditingOptions,
        ScrollingOptions,
        GridMenuItem,
        MenuOptionsItem,
        MenuOptions,
        EventOptions,
        SortingOptions,
        FilterOptions,
        SelectingOptions,
        TreeOptions,
        OptionSource,
        Options_5 as Options,
        RowSource,
        RowModel,
        NameSource,
        NamingModel,
        SelectionModel,
        HorizontalAlignment,
        VerticalAlignment,
        Alignment,
        Color_2 as Color,
        BorderStyle,
        PatternStyle,
        Border,
        CellBorderStyle,
        TextStyle,
        GradientStop,
        Style,
        StylePropertyKey,
        borderToString,
        alignmentToString,
        hashStyle,
        applyTheme,
        ThemeItem,
        ThemeAxisItem,
        TableTheme,
        SparklineType,
        SparklineExtremeValue,
        SparklineOptions,
        SparklineSource,
        SparklineDataRanges,
        SparklineItem,
        SparklineGroupDef,
        Sparklines,
        Renderer,
        CommentRenderer,
        Comparer,
        FormulaFunction,
        BaseGroupModelSource,
        EditType,
        CellValueType,
        FilterValue,
        AditionalUIValueType,
        CellType,
        StyleSource,
        CellAction,
        ShiftOptions,
        FormulaFuncParamDescription,
        FormulaFuncDescription,
        FormulaFuncGroupDescription,
        TabOptions,
        ObjectModel,
        SpillOptions,
        SpillResult,
        AutofitOptions
    }
}

declare abstract class GridAdapter extends ComponentAdapter<Grid> {
    abstract getColumns(): null | ColumnSource[] | Promise<ColumnSource[]>;
    abstract getRows(filters?: RequestFilters): null | RowSource[] | Promise<RowSource[]>;
    getCells(filters?: RequestFilters): null | CellSource[] | Promise<CellSource[]>;
    getStyles(): null | Style[] | Promise<Style[]>;
    getRules(): null | ConditionalFormatSource | Promise<ConditionalFormatSource>;
    getComments(): null | CommentSource[] | Promise<CommentSource[]>;
    getSparklines(): null | SparklineSource[] | Promise<SparklineSource[]>;
    getOptions(): Partial<Options_5> | Promise<Partial<Options_5>>;
}

declare class GridColumnResizeEvent extends GridResizeEvent {
    readonly column: ColumnModel;
    constructor(type: string, grid: Grid, column: ColumnModel, args?: Partial<ResizeEvent>);
}

declare class GridEditEvent extends GridEvent {
    fromHistory?: boolean;
    editType?: EditType;
    oldValues?: CellValueType[];
    newValues?: CellValueType[];
    constructor(args?: Partial<GridEditEvent>);
}

declare class GridEditing {
    readonly grid: Grid;
    private editorMap;
    private editor;
    columnMoving: boolean;
    rowMoving: boolean;
    get model(): GridModel;
    get selection(): SelectionModel;
    get selector(): Selector;
    get events(): GridEvents;
    get table(): Table;
    get isEditing(): boolean;
    get activeEditor(): BaseEditor;
    private _formulaMode;
    get isFormulaMode(): boolean;
    constructor(grid: Grid);
    canEdit(cell: CellModel): boolean;
    updateCellValue(cell: CellModel, value: CellValueType, dispatchEvent?: boolean, fromHistory?: boolean): void;
    updateCellValues(cells: CellModel[], values: CellValueType[], dispatchEvent?: boolean, fromHistory?: boolean): void;
    startFormulaMode(): void;
    endFormulaMode(group?: boolean): void;
    startEdit(initialValue?: unknown): void;
    endEdit(): void;
    commitEdit(): void;
    insertRows(options: InsertOptions): RowModel[];
    insertColumns(options: InsertOptions): ColumnModel[];
    deleteRows(options: DeleteOptions): RowModel[];
    deleteColumns(options: DeleteOptions): ColumnModel[];
    moveRows(options: MovingOptions): void;
    moveColumns(options: MovingOptions): void;
    clearSelection(dispatchEvent?: boolean): void;
    getEditor(cell: CellModel): BaseEditor;
    getFormulaEditor(): BaseEditor;
    copySelection(): void;
    paste(): Promise<void>;
    openComments(cell: CellModel): void;
    undo(): void;
    redo(): void;
    startColumnMoving(_c: number): void;
}

declare class GridEvent extends Event {
    get selection(): SelectionModel;
    get activeCell(): CellRange;
    cells?: CellModel[];
    cell: CellModel;
    row: RowModel;
    column: ColumnModel;
    action: string;
    grid: Grid;
    constructor(type: string, args?: Partial<GridEvent>);
}

declare class GridEvents {
    readonly grid: Grid;
    get model(): GridModel;
    get selection(): SelectionModel;
    get table(): Table;
    clickDisabled: boolean;
    editDisabled: boolean;
    clicked: boolean;
    startOffset: {
        x: number;
        y: number;
    };
    constructor(grid: Grid);
    get isSliding(): boolean;
    suspendClick: () => boolean;
    resumeClick: (delay?: boolean) => void;
    _onKeyDown: (e: KeyboardEvent) => void;
    _onMouseMove: (e: PointerEvent) => void;
    _onMouseDown: (e: PointerEvent) => void;
    _onMouseUp: (e: PointerEvent) => void;
    _onClick: (e: PointerEvent) => void;
    _onContextMenu: (e: MouseEvent) => void;
    _onVerticalSlide: (e: SlideEvent) => void;
    _onHorizontalSlide: (e: SlideEvent) => void;
    _onSlideStart: () => void;
    _onSlideStop: () => void;
    _denbounceHorizontalScroll: {
        (this: unknown, ...args: [dx: number] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    _onWheel: (e: WheelEvent) => void;
    _onTouchStart: (e: TouchEvent) => void;
    _onTouchEnd: (e: TouchEvent) => void;
    _onTouchMove: (e: TouchEvent) => void;
    _onHorizontalResizeStart: () => void;
    _onHorizontalResizeStop: (e: ResizeEvent) => void;
    _onHorizontalResize: (e: ResizeEvent) => void;
    _onVerticalResizeStart: () => void;
    _onVerticalResizeStop: (e: ResizeEvent) => void;
    _onVerticalResize: (e: ResizeEvent) => void;
    _onCommentCommit: (e: CommentEvent) => void;
    _onAutofill: (e: SelectorEvent) => void;
    _onEdit: (e: GridEditEvent) => void;
    _onSelectorMove: (e: SelectorMoveEvent) => void;
    _onMouseLeave: () => void;
    debounceHideSliders: {
        (this: unknown, ...args: [] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    _onRender: () => void;
    _onHorizontalSizerDblClick: (e: MouseEvent) => void;
    _onDblClick: () => void;
    init(): Promise<void>;
}

declare class GridFiltering {
    readonly grid: Grid;
    get model(): GridModel;
    get selection(): SelectionModel;
    get selector(): Selector;
    get events(): GridEvents;
    get table(): Table;
    filter: FilterModel_2;
    filterMap: Map<number, BaseFilter>;
    constructor(grid: Grid);
    get isCustomFilter(): boolean;
    init(): void;
    getFilter(column: ColumnModel): BaseFilter;
    private deactivate;
    subscribeDeactivation(filter: BaseFilter): void;
    unsubscribeDeactivation(): void;
    openFilter(column: ColumnModel, th: TableHeaderCell): void;
}

declare class GridGroup extends LitElement implements Layout {
    static styles: CSSResult;
    options: GroupOptions;
    model: GroupModel;
    containerModel: TabSplitContainerModel;
    designMode: boolean;
    zoom: number;
    tabPosition: VerticalPosition;
    logger: log.Logger;
    grids: Map<string, Grid>;
    container: TabSplitContainer;
    private commandWindowRef;
    get commandWindow(): CommandWindow;
    private _activeGrid;
    get activeGrid(): Grid;
    private _commands;
    readonly plugins: Plugins<this>;
    get commands(): Commands;
    private _formulaModeGrid;
    get formulaModeGrid(): Grid;
    get isFormulaMode(): boolean;
    _isLoaded: boolean;
    /** Returns grid data models in order they are displayed within the layout */
    get gridModels(): GridModel[];
    startFormulaMode(grid: Grid): void;
    endFormulaMode(): void;
    activateGrid(name: string, dispatchEvent?: boolean): void;
    previewZoom(zoom: number): void;
    updateZoom(): void;
    hideSelectors(): void;
    showSelectors(): void;
    renameSheet(oldName: string, newName: string): void;
    updateTabs(): void;
    updateContainer(): void;
    updateCommands(): void;
    constructor();
    deleteModel(name: string): void;
    duplicateModel(name: string): void;
    connectedCallback(): void;
    layout(): void;
    setSourceData(sourceData: GroupModelSource): void;
    getSourceData(): GroupModelSource;
    willUpdate(props: Map<PropertyKey, undefined>): void;
    getGrid(name: string): Grid;
    getGridByModel(model: GridModel): Grid;
    _onGridSelect: (e: GridEvent) => void;
    createGrid: (id: ComponentId) => Promise<Grid>;
    _onTabSelect: (e: TabEvent) => void;
    _onTabAdd: (e: TabEvent) => void;
    registerCommands(): void;
    _onCommandsOpen: () => void;
    _onContainerLoad: () => void;
    render: () => TemplateResult<1>;
    /**
     * Adds tabs for grid models missing in layout definition.
     */
    fixLayout(): void;
}

declare class GridGroupEvent extends Event {
    constructor(type: string);
}

declare type GridMenuItem<T extends ElementModel> = MenuItem & {
    hidden?: (model: T) => boolean;
};

declare class GridMenus {
    readonly grid: Grid;
    get model(): GridModel;
    get selection(): SelectionModel;
    get selector(): Selector;
    get events(): GridEvents;
    get table(): Table;
    get contextMenu(): Menu;
    private currentMenuItems;
    private currentColumn;
    private currentRow;
    private currentCell;
    constructor(grid: Grid);
    _onContextMenuClick: (e: ListSelectEvent) => void;
    init(): void;
    _onOutlineLevelChange: (e: Event, element: RowModel | ColumnModel) => void;
    renderOutlineMenuItem: (element: RowModel | ColumnModel) => TemplateResult<1>;
    openMenu(position: {
        x: number;
        y: number;
    }): void;
    openColumnMenu(column: ColumnModel, position: {
        x: number;
        y: number;
    }): void;
    openRowMenu(row: RowModel, position: {
        x: number;
        y: number;
    }): void;
    openCellMenu(cell: CellModel, position: {
        x: number;
        y: number;
    }): void;
}

declare class GridModel implements Model<GridSource> {
    index: number;
    name: string;
    tab: TabOptions;
    rows: RowModel[];
    visibleRows: RowModel[];
    rowRoot: RowModel;
    colRoot: ColumnModel;
    columns: ColumnModel[];
    visibleColumns: ColumnModel[];
    visibleColumnIndex: Record<number, number>;
    otherSourceData: Record<string, unknown>;
    otherModels: Record<string, Set<Model>>;
    readonly styles: StyleModel;
    private _comments;
    get comments(): CommentModel;
    private _calculations;
    get calculations(): CalculationModel;
    private _names;
    get names(): NamingModel;
    private _sparklines;
    get sparklines(): Sparklines;
    private _conditionalFormats;
    get conditionalFormats(): ConditionalFormats;
    private _mergedHeaders;
    get mergedHeaders(): (Merge & {
        h: ColumnHeaderModel;
    })[];
    private _mergedCells;
    get mergedCells(): Merge[];
    private _hiddenCells;
    get hiddenCells(): Map<number, Map<number, Merge>>;
    private _filter;
    get hasFilter(): boolean;
    private _maxRowLevel;
    get hasRowTree(): boolean;
    get hasRowTreeEnabled(): boolean;
    get maxRowLevel(): number;
    private _maxColumnLevel;
    get hasColumnTree(): boolean;
    get hasColumnTreeEnabled(): boolean;
    get maxColumnLevel(): number;
    private _headerCount;
    private _headerHeights;
    get headerCount(): number;
    get columnHeaderCount(): number;
    private _viewport;
    private _levelBasedRowTree;
    private _levelBasedColTree;
    protected _properties: CustomProperties;
    get properties(): CustomProperties;
    set properties(v: CustomProperties);
    readonly logger: log.Logger;
    options: Options_5;
    group: GroupModel;
    constructor(source: GridSource, options?: Options_5, logger?: log.Logger);
    getConnectedModel(name: string): GridModel;
    getModelByRange(range: CellRange): GridModel;
    getCellByA1(a1: string): CellModel;
    getCellByRange(r: CellRange): CellModel;
    getCellByCoords(r: number, c: number): CellModel;
    cell(coord1: string | number | CellRange, coord2?: number): CellModel;
    createRows(source: RowSource[], root?: RowModel, indexOffset?: number): [RowModel, RowModel[], number, boolean];
    insertRowData(parent: RowModel, offset: number, source: RowSource[]): void;
    applyTheme(theme: TableTheme, invalidateCellStyles?: boolean): void;
    populate(source: GridSource): void;
    getSourceData(): GridSource;
    calcHeaderHeights(): void;
    indexRows(): void;
    indexVisibleRows(): void;
    indexRowsByTree(): void;
    indexColumns(): void;
    indexVisibleColumns(): void;
    indexHeaders(): void;
    removeHeader(r: number): void;
    clearRows: () => RowModel[];
    clearColumns: () => ColumnModel[];
    clear(): void;
    resetViewport(): this;
    getViewport(offset: {
        c: number;
        r: number;
    }, viewportSize: {
        w: number;
        h: number;
    }, freeze: {
        t: number;
        l: number;
        b: number;
        r: number;
    }): Viewport;
    calculateViewport(): CellModel[];
    getValuesInRange(range: CellRange, formattedValues?: boolean): Matrix<unknown>;
    setRowExpandLevel(level: number): void;
    setColumnExpandLevel(level: number): void;
    getViewportRange(): CellRange;
    get gridRange(): CellRange;
    getRangeIterator(range: CellRange, withinViewport?: boolean): IterableRange;
    getInitializedCellIterator(): IterableRange;
    getCellArray(range: CellRange): CellModel[];
    transformRangeToMatrix<T>(range: CellRange, transform: (cell: CellModel) => T): Matrix<T>;
    getCellMatrix(range: CellRange): Matrix<CellModel>;
    getValueMatrix(range: CellRange): Matrix<unknown>;
    shiftMerges(options: ShiftOptions): void;
    indexHiddenCells(): void;
    shift(options: ShiftOptions): void;
    clearCalculations(all?: boolean): void;
    refreshSparklines(): void;
    clearCalculatedStyles(): void;
    insertColumns(index: number, count: number, after?: boolean): ColumnModel[];
    deleteColumns(index: number, count: number): ColumnModel[];
    insertRows(index: number, rows: number | RowModel[], after?: boolean): RowModel[];
    deleteRows(index: number, count: number): RowModel[];
    moveRows(index: number, count: number, targetIndex: number): RowModel[];
    moveColumns(index: number, count: number, targetIndex: number): ColumnModel[];
    spillValues(opt: SpillOptions): SpillResult;
    getCellByName(name: string, contextRange: CellRange, searchGroup?: boolean): CellModel;
    getRangeByName(name: string, searchGroup?: boolean): CellRange;
    getValueMatrixByName(name: string, searchGroup?: boolean): Matrix<unknown>;
    rebuildRowTree(): void;
    rebuildColumnTree(): void;
    calculateCellOffset(cell: CellRange): Location_2;
}

declare class GridObjects {
    readonly grid: Grid;
    get model(): GridModel;
    private _maxZIndex;
    private _hosts;
    get hosts(): Set<ObjectHost>;
    private _activeObject;
    get activeObject(): ObjectHost;
    constructor(grid: Grid);
    bringToFront(host: ObjectHost): void;
    _onHostMouseDown: (host: ObjectHost, e: MouseEvent) => void;
    add(options: CreateObjectOptions): ObjectHost;
    delete(_host?: ObjectHost): void;
    updatePostions(): void;
}

declare class GridRendering {
    readonly grid: Grid;
    requireVerticalUpdate: boolean;
    requireHorizontalUpdate: boolean;
    touchStartX: Touch;
    touchStartY: Touch;
    resizing: boolean;
    currentResizedColumn: ColumnModel;
    currentResizedColumnWidth: number;
    currentResizedRow: RowModel;
    currentResizedRowHeight: number;
    private _vScrolling;
    get vScrolling(): boolean;
    private _hScrolling;
    get hScrolling(): boolean;
    get model(): GridModel;
    get selection(): SelectionModel;
    get table(): Table;
    constructor(grid: Grid);
    readonly debounceRenderCells: {
        (this: unknown, ...args: [update?: TableRenderOptions] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    readonly debounceCalculateViewport: {
        (this: unknown, ...args: [recalculate?: boolean] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    isLastRowInViewport(): boolean;
    renderCells(update?: TableRenderOptions): void;
    renderAll(rerenderTable?: boolean): void;
    render(rerenderTable?: boolean): Promise<void>;
    updateRange(range: CellRange, recalculate?: boolean): void;
    updateCell(cell: CellModel, recalculate?: boolean): void;
    updateSpilledCells(cell: CellModel): void;
    updateCells(cells: Iterable<CellModel>, recalculate?: boolean): void;
    updateHeaders(): void;
    calculateViewport(recalculate?: boolean): void;
    updateSliders(): void;
    isVerticalScrollingEnabled(): boolean;
    isHorizontalScrollingEnabled(): boolean;
    updateSliderVisibility(): void;
    hideSliders(): void;
    scrollVerticalByPixels(pixels: number): void;
    scrollHorizontalByPixels(pixels: number): void;
    updateCellSelectionRange(): void;
    getAdapterRequestFilters(): RequestFilters;
    toggleRow(index: number, dispatchEvent?: boolean): Promise<void>;
    toggleColumn(index: number, dispatchEvent?: boolean): void;
    setRowExpandLevel(level: number): void;
    setColumnExpandLevel(level: number): void;
    exportHTML(): Promise<string>;
    autoscrollDirection: Direction;
    autoscrollTimer: number;
    autoscrollValue: number;
    stopAutoscroll(): void;
    startAutoscroll(): void;
    autoscroll(moousePosition: {
        x: number;
        y: number;
    }): void;
    loadNextPage(parentIndex?: number, forceLoad?: boolean): Promise<void>;
    get totalSize(): {
        width: number;
        height: number;
    };
    private autofitDiv;
    autofitColumn(c: number | ColumnModel, visibleValuesOnly?: boolean): void;
    autofitColumns(visibleValuesOnly?: boolean): void;
    scrollTo(r: number | RangeAddress, c?: number): void;
}

declare class GridResizeEvent extends ResizeEvent {
    readonly grid: Grid;
    constructor(type: string, grid: Grid, args?: Partial<ResizeEvent>);
}

declare class GridRowResizeEvent extends GridResizeEvent {
    readonly row: RowModel;
    constructor(type: string, grid: Grid, row: RowModel, args?: Partial<ResizeEvent>);
}

declare class GridSelecting {
    readonly grid: Grid;
    private columnSelecting;
    private rowSelecting;
    private startSelectingRange;
    private _formulaSelection;
    readonly formulaSelectors: Map<number, Selector>;
    get model(): GridModel;
    get selection(): SelectionModel;
    get selector(): Selector;
    get formulaSelection(): SelectionModel;
    get events(): GridEvents;
    get table(): Table;
    get isSelecting(): boolean;
    get isCellSelecting(): boolean;
    get isAutofilling(): boolean;
    get isMoving(): boolean;
    get isSelectorOperationActive(): boolean;
    get isFormulaSelectorOperationActive(): boolean;
    get activeCell(): CellModel;
    constructor(grid: Grid);
    moveToSelection(): void;
    /**
     * Select a range of cells.
     * @param range
     * @param dispatchEvent
     */
    select(range: string | CellRange, dispatchEvent?: boolean): void;
    /**
     * Enter selection mode, usualy after clicking on a cell.
     * @param range
     */
    startCellSelecting(range: CellRange): void;
    /**
     * Enter column selection mode, usualy after clicking on a column header.
     * @param c column index
     */
    startColumnSelecting(c: number): void;
    /**
     * Enter row selection mode, usualy after clicking on a row header.
     * @param r row index
     */
    startRowSelecting(r: number): void;
    /**
     * Update selector while moving pointer over grid during selection mode.
     * @param c column index
     * @param r row index
     */
    updateSelecting(c: number, r: number): void;
    /**
     * Stop selection mode.
     */
    stopSelecting(): void;
    /**
     * Highlights row/column headers of selected range.
     */
    highlightSelection(): void;
    updateSelector(dispatchEvent?: boolean): void;
    /**
     * Shows selector if hidden.
     * @param dispatchEvent
     */
    showSelector(dispatchEvent?: boolean): void;
    /**
     * Hides selector if visible.
     */
    hideSelector(): void;
    /**
     * Moves selector by c columns and r rows.
     * @param c
     * @param r
     */
    moveSelector(c: number, r: number): void;
    debounceMoveSelector: {
        (this: unknown, ...args: [c: number, r: number] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    shiftActiveCell(offset: number, dispatchEvent?: boolean): void;
    updateFormulaSelector(dispatchEvent?: boolean): void;
    showFormulaSelector(dispatchEvent?: boolean): void;
    hideFormulaSelector(): void;
    updateFormulaSelectors(): void;
    highlightColorItem(item: FormulaColorItem): void;
    highlightFormula(formula: Formula): void;
    removeFormulaHighlight(): void;
    updateCopySelector(): void;
    showCopySelector(): void;
    hideCopySelector(): void;
    mergeSelection(): void;
    unmergeSelection(): void;
    updateSelectors(): void;
    stopSelectOperations(): void;
    /**
     * Move selector or submit formula while editing.
     */
    enter(): void;
}

declare class GridSorting {
    readonly grid: Grid;
    get model(): GridModel;
    get selection(): SelectionModel;
    get selector(): Selector;
    get events(): GridEvents;
    get table(): Table;
    sortingModel: SortingModel;
    constructor(grid: Grid);
    clearCache(): void;
    sort(c: number, ord?: SortOrder): void;
    resetSort(): void;
    init(): void;
}

/** Source object type for grid */
declare type GridSource = {
    /** grid index with group (readonly) */
    index?: number;
    /** sheet name */
    name?: string;
    /** row array */
    rows?: RowSource[];
    /** column array */
    columns?: ColumnSource[];
    /** cell array */
    cells?: CellSource[];
    /** grid options */
    options?: OptionSource;
    /** sprakline definitions */
    sparklines?: SparklineSource[];
    /** conditional format definitions */
    rules?: ConditionalFormatSource;
    /** comment array */
    comments?: CommentSource[];
    /** style array */
    styles?: Style[];
    /** renge names */
    names?: NameSource[];
    /** custom properties */
    props?: CustomProperties;
    /** tab settings used when grid is within group */
    tab?: TabOptions;
    /** table theme */
    theme?: TableTheme;
    /** additional properties */
    [key: string]: unknown;
};

declare class GridStats extends LitElement {
    static styles: CSSResult[];
    grid: Grid;
    range: CellRange;
    stats: [string, string][];
    willUpdate(props: Map<PropertyKey, unknown>): void;
    render: () => TemplateResult<1>;
}

declare class GridTooltip extends Tooltip {
    static styles: CSSResult[][];
    constructor();
    connectedCallback(): void;
    attachToCell(td: HTMLElement, cell: CellModel): void;
}

declare class GroupModel {
    private _max;
    readonly models: Map<string, GridModel>;
    readonly themes: Map<string, TableTheme>;
    private _errors;
    get errors(): Error[];
    get(name: string): GridModel;
    has(name: string): boolean;
    getNewName(): string;
    add(model: GridModel): GridModel;
    duplicate(name: string): GridModel;
    remove(name: string): this;
    rename(name: string, newName: string): this;
    clear(): void;
    constructor(sourceData?: BaseGroupModelSource);
    populate(sourceData: BaseGroupModelSource): void;
    getSourceData(): BaseGroupModelSource;
    getCellByName(name: string, contextRange: CellRange): CellModel;
    getRangeByName(name: string): CellRange;
    getValueMatrixByName(name: string): Matrix<unknown>;
}

declare type GroupModelSource = {
    layout: TabSplitContainerSource;
} & BaseGroupModelSource;

declare type GroupOptions = {
    commandWindow?: boolean;
    showHiddenTabs?: boolean;
    grid?: Options_5;
};

declare const hashStyle: (s: Style) => string;

declare function hasLocale(locale: LocaleId_2): boolean;

declare class HeaderForm extends LitElement {
    grid: Grid;
    range: CellRange;
    formContainer: FormContainer;
    headerCount: number;
    formConfig: FormSettings[];
    connectedCallback(): void;
    getGridColumn(): ColumnModel;
    getFormContainerConfig(): FormSettings[];
    constructor();
    willUpdate(props: Map<PropertyKey, unknown>): void;
    updated(props: Map<PropertyKey, unknown>): void;
    render: () => TemplateResult<1>;
}

declare function hideCell(cell: HTMLTableCellElement): void;

declare function hideElement(elm: HTMLElement): HTMLElement;

declare function highlightText(text: string, segments: [number, number][], color?: string): string;

declare class History_2 {
    readonly model: GridModel;
    stack: HistoryItem[];
    restack: HistoryItem[];
    constructor(model: GridModel);
    push(item: HistoryItem): this;
    pop(count?: number): HistoryItem[];
    pop2(count?: number): HistoryItem[];
}

declare type HistoryItem = {
    type: EditType;
    addresses: CellAddress[];
    names: string[];
    oldValues?: CellValueType[];
    newValues?: CellValueType[];
    timestamp?: number;
};

declare function hlookup(lookupValue: string, lookupTable: Matrix<string>, rowIndex: number, exactMatch?: boolean): string;

declare type HorizontalAlignment = 'left' | 'right' | 'center';

declare type HorizontalPosition = 'left' | 'right' | 'center';

export declare namespace html {
    export {
        escapeHTML,
        highlightText
    }
}

declare class Icon extends LitElement {
    static defaultIconSet: string;
    static defaultStatusIconSet: string;
    get iconSet(): string;
    get statusIconSet(): string;
    static styles: CSSResult;
    private _icon;
    fixedWidth: boolean;
    set icon(value: IconSpec | string);
    get icon(): IconSpec | string;
    get mainIcon(): string[];
    get statusIcon(): string[];
    render: () => TemplateResult<1>;
}

declare const iconSets: Map<ConditionalFormatIconType, IconSpec[]>;

declare type IconSpec = {
    icon: string | [string, string];
    color?: string;
    statusIcon?: string | [string, string];
    statusColor?: string;
    size?: '' | 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null;
    rotation?: number;
};

declare interface IControl<TValue = unknown, TAdapter extends ComponentAdapter = null> extends HTMLElement {
    model: FormControlModel;
    adapter: TAdapter;
    value: TValue;
    reset(): void;
    validate(): void;
    get isValid(): boolean;
}

declare function _if(condition: unknown, ifTrue: unknown, ifFalse: unknown): unknown;

declare function iferror(value: unknown, valueIfError: unknown): unknown;

declare function ifNull<T>(value: T | null, def: T): T;

declare interface ILinkedList<T> {
    insertInBegin(data: T): LinkedListNode<T>;
    insertAtEnd(data: T): LinkedListNode<T>;
    deleteNode(node: LinkedListNode<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): LinkedListNode<T> | null;
}

declare const images: Record<string, string>;

declare function index(range: ArrayArg, row: number, column: number): Value | Value[];

declare function indirect(ref: string): unknown;

declare function initGridCommands(grid: Grid): void;

declare function initOptions<T extends Partial<Options>>(options?: T, origOptions?: T): T;

declare function initOptions_2(options?: Partial<OptionSource>, origOptions?: OptionSource): Options_5;

declare class Input extends LitElement {
    static styles: CSSResult[];
    value: string;
    input: HTMLInputElement;
    constructor();
    _onInput: (e: InputEvent) => void;
    focus(): void;
    selectAll(): void;
    render: () => TemplateResult<1>;
}

declare type InsertOptions = DeleteOptions & {
    after?: boolean;
};

declare function intersect<T>(arr1: T[], arr2: T[]): T[];

declare interface IPrototype<T> {
    prototype: T;
}

declare const isArythmeticOperator: (o: string) => o is ArythmeticOperator;

declare function isBlank(value: Arg): boolean;

declare function isBool(value: unknown): value is boolean;

declare const isBool_2: (value: string) => boolean;

declare function isCharLetter(char: string): boolean;

declare function isControlCharacter(charCode: string): boolean;

declare function isdecimal(x: number): boolean;

declare function iseven(x: number): boolean;

declare const isExtendedNumberFormat: (options: NumberFormatOptions) => string | boolean;

declare const isFormula: (value: string) => boolean;

declare function isFunction(value: unknown): boolean;

declare function isHidden(elm: HTMLElement): boolean;

declare const isLetter: (code: number) => boolean;

declare const isLogicalOperator: (o: string) => o is LogicalOperataor;

declare function isNumber(value: unknown): value is number;

declare const isNumber_2: (code: number) => boolean;

declare function isNumberFormat(format: string): boolean;

declare function isNumericString(value: string): boolean;

declare function isObject(value: unknown): boolean;

declare function isodd(x: number): boolean;

declare const isOperand: (type: TokenType) => type is TokenType.Number | TokenType.Boolean | TokenType.String | TokenType.Cell | TokenType.Variable | TokenType.Range;

declare const isOperator: (o: string) => o is Operator;

declare function isoweeknum(sn: DateArg): number;

declare function isSheetNameValid(name: string): boolean;

declare function isString(value: unknown): value is string;

declare type ItemMetadata = {
    value?: string;
};

declare type ItemProperty = {
    name: string;
    type: ItemPropertyType;
    format: string;
};

declare enum ItemPropertyType {
    Numeric = "n",
    Text = "t",
    Date = "d",
    Boolean = "b"
}

declare type ItemTypeOptions = {
    folderIcon?: string;
    openFolderIcon?: string;
};

declare class IterableAddressRange extends CellRange {
    private r;
    private c;
    private done;
    constructor(range: CellRange);
    [Symbol.iterator](): this;
    next(): {
        done: boolean;
        value?: undefined;
    } | {
        done: boolean;
        value: CellRange;
    };
}

declare class IterableRange extends CellRange {
    private model;
    private initializedOnly;
    private r;
    private c;
    private done;
    constructor(model: GridModel, range: CellRange, initializedOnly?: boolean);
    [Symbol.iterator](): this;
    nextInitialized(): CellModel;
    next(): {
        done: boolean;
        value?: CellModel;
    };
    forEach(callback: (cell: CellModel) => void): void;
}

declare type KeyValue = {
    key: string;
    value?: string;
};

declare class LangTreeAdapter extends TreeAdapter {
    getTree(): Promise<{
        k: string;
        v: string;
    }[]>;
    getOptions(): Options_2;
}

declare interface Layout extends HTMLElement {
    layout(): void;
}

/**
 * Returns the leftmost characters from a text value.
 *
 * @link https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c
 * @link https://support.google.com/docs/answer/3094079
 * @param v string
 * @param count number
 * @returns string
 */
declare function left(v: string, count?: number): string;

declare type LevelBasedTreeCreateOptions = {
    reverse?: boolean;
};

declare class LevelExpander extends LitElement {
    static styles: CSSResult[];
    level: number;
    render(): TemplateResult<1>;
    constructor();
}

declare class LevelExpandEvent extends ExpandEvent {
    readonly level: number;
    constructor(level: number);
}

declare class Levels extends LitElement {
    static styles: CSSResult[];
    count: number;
    selection: Map<number, boolean>;
    firstUpdated(): void;
    render: () => TemplateResult<1>;
}

declare class LevelSelectEvent extends Event {
    readonly level: number;
    constructor(level: number);
}

/**
 * @param color Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @param amount
 * @returns Color hex string
 */
declare function lighten(color: string, amount?: number): string;

declare class LinkedList<T> implements ILinkedList<T> {
    private head;
    insertAtEnd(data: T): LinkedListNode<T>;
    insertInBegin(data: T): LinkedListNode<T>;
    deleteNode(node: LinkedListNode<T>): void;
    search(comparator: (data: T) => boolean): LinkedListNode<T> | null;
    traverse(): T[];
    size(): number;
}

declare class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    constructor(data: T);
}

declare class List extends LitElement implements Layout {
    static styles: CSSResult[];
    static contentStyles: CSSResult[];
    private _selectedIndex;
    get selectedIndex(): number;
    set selectedIndex(value: number);
    itemHeight: number;
    dynamicItemHeight: boolean;
    lineHeight: number;
    size: number;
    customStyle: CSSResultOrNative | string | (CSSResultOrNative | string)[];
    nativeHeight: boolean;
    arrowEvents: boolean;
    disabledSelect: boolean;
    disabledFocus: boolean;
    maxHeight: number;
    itemRenderer: ListItemRenderer;
    readonly items: Map<number, HTMLDivElement>;
    private containerRef;
    get container(): Container;
    private scrollContainerRef;
    get scrollContainer(): HTMLDivElement;
    private itemContainerRef;
    get itemContainer(): HTMLDivElement;
    private scrolling;
    private renderEvent;
    private itemHeights;
    private measuredWidths;
    private _offset;
    get offset(): number;
    set offset(value: number);
    constructor();
    get pageSize(): number;
    get calculatedHeight(): number;
    reset(): void;
    scrollToOffset(offset: number): void;
    scrollToIndex(index: number): void;
    scrollToView(item: HTMLDivElement): void;
    moveUp(count?: number): void;
    moveDown(count?: number): void;
    deselect(): void;
    select(index: number, trigger?: ListSelectTrigger, elm?: HTMLElement): void;
    getItem(index: number): HTMLDivElement;
    private keyActions;
    firstUpdated(): void;
    willUpdate(changedProps: Map<PropertyKey, unknown>): void;
    updated(): void;
    requestRender(): void;
    renderItems(all?: boolean): void;
    calculateItemContainerOffset(index: number): number;
    calculateViewportMaxItemWidth(): number;
    measureItemWidth(index: number): number;
    updateSliders(): void;
    layout(): void;
    get scrollHeight(): number;
    get normalizedItemStyle(): CSSResultOrNative[];
    render: () => TemplateResult<1>;
}

declare type ListItemElement = HTMLDivElement & {
    index: number;
};

declare type ListItemRenderer = (div: HTMLDivElement, index: number, opts?: ListItemRendererOptions) => string | TemplateResult<1> | void;

declare type ListItemRendererOptions = {
    measure?: boolean;
};

declare class ListPointerEvent extends PointerEvent {
    list: List;
    index: number;
    constructor(type: string, e: PointerEvent, args?: Partial<ListPointerEvent>);
}

declare class ListSelectEvent extends Event {
    readonly trigger: ListSelectTrigger;
    readonly index: number;
    readonly elm: HTMLElement;
    constructor(type: string, trigger: ListSelectTrigger, index: number, elm: HTMLElement);
}

declare enum ListSelectTrigger {
    Enter = "enter",
    Click = "click",
    Arrow = "arrow"
}

declare class ListSortEvent extends Event {
    readonly fromIndex: number;
    readonly toIndex: number;
    readonly sourceList: SortableList;
    readonly targetList: SortableList;
    constructor(args: Partial<ListSortEvent>);
}

export { LitElement }

declare function ln(x: number): number;

declare class Loader extends LitElement {
    static styles: CSSResult;
    icon: string;
    color: string;
    size: '' | 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null;
    render: () => TemplateResult<1>;
}

declare class LocaleChangeEvent extends Event {
    locale: string;
    constructor(locale: string);
}

declare type LocaleId = string;

declare type LocaleId_2 = string;

export declare namespace localize {
    export {
        getSystemLocale,
        registerLocale,
        getLocale,
        hasLocale,
        setLocale,
        msg,
        LocaleId_2 as LocaleId,
        MsgOptions,
        LocalizeItem,
        LocaleChangeEvent,
        getISOCode,
        getRegionISOCode
    }
}

declare type LocalizeItem = {
    id: string;
    source: string;
    target: string;
};

declare type Location_2 = {
    x: number;
    y: number;
};

export declare namespace log {
    export {
        getLogger,
        LogLevel,
        Logger
    }
}

declare function log10(x: number): number;

declare function log_2(x: number, base: number): number;

declare class Logger {
    readonly name: string;
    styles: string[];
    errorStyles: string[];
    defaultLevel: LogLevel;
    constructor(name: string);
    private format;
    log(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string, exception?: Error): void;
    debug(message: string): void;
    trace(message: string): void;
}

declare namespace logicalFunctions {
    export {
        and,
        or,
        xor,
        _switch,
        _if,
        not,
        _false,
        _true,
        iferror
    }
}

declare type LogicalOperataor = '=' | '>' | '<' | '>=' | '<=';

declare enum LogLevel {
    Info = "i",
    Warn = "w",
    Error = "e",
    Debug = "d",
    Trace = "t"
}

declare function lookup(lookupValue: unknown, lookupTable: Matrix<unknown>, resultTable?: Matrix<unknown>): unknown;

declare namespace lookupFunctions {
    export {
        address,
        vlookup,
        hlookup,
        lookup,
        choose,
        column,
        row,
        columns,
        rows,
        formulatext,
        index,
        indirect,
        match,
        offset,
        filter
    }
}

declare const _map: Map<string, FormulaFunction>;

declare function match(matchValue: unknown, range: Matrix<unknown>, matchType?: number): number;

declare namespace mathFunctions {
    export {
        acos,
        acosh,
        acot,
        acoth,
        asin,
        asinh,
        atan,
        atanh,
        cos,
        cosh,
        cot,
        coth,
        csc,
        csch,
        degrees,
        PI,
        sec,
        sech,
        sin,
        sinh,
        tan,
        tanh,
        abs,
        ceiling,
        even,
        exp,
        fact,
        factdouble,
        floor,
        isdecimal,
        iseven,
        isodd,
        ln,
        log_2 as log,
        log10,
        mod_2 as mod,
        odd,
        power,
        product,
        quotient,
        radians,
        rand,
        randarray,
        randbetween,
        round,
        rounddown,
        roundup,
        sequence,
        sign,
        sqrt,
        sqrtpi,
        count,
        countblank,
        countif,
        countunique,
        sum,
        sumif,
        sumsq,
        sumproduct
    }
}

declare type Matrix<T = unknown> = T[][];

export declare namespace matrix {
    export {
        reverseColumns,
        reverseRows,
        transpose,
        clone_2 as clone
    }
}

declare function matrixOperation<T>(m1: Matrix<T>, m2: Matrix<T>, operator: Operator): Matrix<T>;

declare function max(...args: ArrayArg): number;

declare function measureText(text: string, font: string): TextMetrics;

declare function query<T>(selector: string, parent?: ParentNode) : T;

declare class Menu extends LitElement {
    static styles: CSSResult[];
    items: MenuItem[];
    dynamicWidth: boolean;
    disabledFocus: boolean;
    list: List;
    private _hasIcons;
    private _autoHide;
    willUpdate(changedProps: Map<PropertyKey, unknown>): void;
    updated(changedProps: Map<PropertyKey, unknown>): void;
    updateWidth(): Promise<void>;
    constructor();
    connectedCallback(): void;
    itemRenderer: (div: HTMLDivElement, index: number) => TemplateResult<1>;
    open(elm: HTMLElement, position?: MenuPosition): Promise<void>;
    openAt(x: number, y: number): Promise<void>;
    _onRender: () => void;
    _onSelect: (e: ListSelectEvent) => void;
    render: () => TemplateResult<1>;
}

declare class MenuEvent extends Event {
    readonly item: MenuItem;
    constructor(type: string, item: MenuItem);
}

declare type MenuItem = {
    key?: number | string;
    value?: string;
    icon?: IconSpec | string;
    color?: string;
    type?: 'normal' | 'label' | null;
    divider?: boolean;
    renderer?: (div: HTMLDivElement, index: number, item: MenuItem) => TemplateResult<1> | HTMLElement;
    exec?: (item: MenuItem) => void;
};

declare type MenuOptions = {
    cell: MenuOptionsItem<CellModel>;
    row: MenuOptionsItem<RowModel>;
    column: MenuOptionsItem<ColumnModel>;
};

declare type MenuOptionsItem<T extends ElementModel> = {
    items: GridMenuItem<T>[];
    hidden?: (model: T) => boolean;
    replace?: boolean;
};

declare type MenuPosition = 'right' | 'left';

/** Merge definition */
declare type Merge = {
    /** row index */
    r: number;
    /** column index */
    c: number;
    /** row span */
    rs: number;
    /** column span */
    cs: number;
};

declare function mergeDeep<T>(target: T, ...sources: Partial<T>[]): T;

declare function mid(v: string, start: number, count: number): string;

declare function min(...args: ArrayArg): number;

declare function minmax(values: number[]): [number, number];

declare function minmax2d(...values: Matrix<number>[]): [number, number];

/**
 * @param startColor Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @param endColor Color string based of color-string library (https://github.com/Qix-/color-string#readme)
 * @param amount
 * @returns Color hex string
 */
declare function mix(startColor: string, endColor: string, amount?: number): string;

declare type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>;

declare function mod(n: number, d: number): number;

declare function mod_2(divident: number, divisor: number): number;

declare class ModalSidebar extends LitElement implements Layout {
    static styles: CSSResult[];
    caption: string;
    closable: boolean;
    bucket: Bucket;
    componentId: ComponentId;
    body: HTMLDivElement;
    private component;
    layout(): void;
    _onClose: () => void;
    disconnectedCallback(): void;
    updated(props: Map<PropertyKey, unknown>): Promise<void>;
    close(): void;
    render: () => TemplateResult<1>;
}

declare type ModalSidebarOptions = {
    id?: ComponentId;
    component?: HTMLElement;
    width?: number;
    caption?: string;
    closable?: boolean;
    position?: HorizontalPosition;
};

declare interface Model<TSource = unknown> {
    populate(source: TSource): void;
    getSourceData(): TSource;
}

declare class MonacoLoader {
    static monaco: typeof monacoNS;
    static monacoStyle: string;
    static monacoPath: string;
    static init(path: string): void;
    static get(): Promise<typeof monacoNS>;
    static getSync(): typeof monacoNS;
    static load(): Promise<typeof monacoNS>;
    static loadToIFrame(iframe: HTMLIFrameElement): Promise<typeof monacoNS>;
}

declare function month(sn: DateArg): number;

declare type MovingOptions = DeleteOptions & {
    targetIndex: number;
};

/**
 * Translate a message to the current locale
 * @param message source message
 * @param options translation options
 * @returns
 */
declare function msg(message: string | string[], options?: MsgOptions): string;

declare type MsgOptions = {
    /** Unique message id */
    id?: string;
    /** Description of this message */
    desc?: string;
    /** word separator */
    separator?: string;
};

declare type Names = Map<string, NameSource[]>;

declare class NamesForm extends LitElement {
    static styles: CSSResult[];
    grid: Grid;
    model: GridModel;
    list: List;
    _items: [string, CellRange][];
    get items(): [string, CellRange][];
    connectedCallback(): void;
    updateList: () => void;
    deleteName(index: number): void;
    addName(): void;
    _onApplyClick: () => void;
    _onInputChange(e: Event, groupIndex: number): void;
    _itemRenderer: (_div: HTMLDivElement, index: number) => TemplateResult<1>;
    updated(): void;
    render: () => "" | TemplateResult<1>;
}

/** Source object type for names ranges */
declare type NameSource = {
    /** Name of the range */
    name: string;
    /** Range A1 string or coord object */
    ref: string | RangeCoords;
};

declare class NamingModel {
    readonly model: GridModel;
    readonly names: Map<string, CellRange>;
    readonly rangeMap: Map<string, string>;
    constructor(model: GridModel, sourceData?: NameSource[]);
    populate(sourceData: NameSource[]): void;
    set(name: string, range: CellRange): void;
    delete(name: string): void;
    findCellByName(name: string): CellRange;
    getCellByName(name: string, contextRange: CellRange): CellModel;
    getRangeByName(name: string, trim?: boolean): CellRange;
    shift(options: ShiftOptions): void;
}

declare class NodeModel extends NodeModel_base {
    model: TreeModel;
    subLevels: number;
    private _type;
    get type(): string;
    set type(v: string);
    private _checkbox;
    get checkbox(): boolean;
    set checkbox(v: boolean);
    private _key;
    get key(): string;
    private set key(value);
    private _value;
    get value(): string;
    set value(v: string);
    private _htmlValue;
    get htmlValue(): string;
    set htmlValue(v: string);
    private _icon;
    get icon(): IconSpec | string;
    set icon(v: IconSpec | string);
    private _folder;
    get folder(): FolderOptions;
    set folder(v: FolderOptions);
    private _renderer;
    get renderer(): TreeNodeRenderer;
    set renderer(v: TreeNodeRenderer);
    protected _properties: CustomProperties;
    get properties(): CustomProperties;
    set properties(v: CustomProperties);
    constructor(model: TreeModel, source: NodeSource);
    populate(source: NodeSource): void;
    getSourceData(): NodeSource;
}

declare const NodeModel_base: (new (...input: any[]) => {
    index: number;
    parentIndex: number;
    level: number;
    _children: any[];
    _count: number;
    _parent: any;
    _collapsed: boolean;
    _hidden: boolean;
    _filterState: tree_2.FilterState;
    _filterable: boolean;
    _sortable: boolean;
    populate(source: tree_2.TreeNodeSource): void;
    getSourceData(): tree_2.TreeNodeSource;
    readonly filterable: boolean;
    readonly sortable: boolean;
    filterState: tree_2.FilterState;
    hidden: boolean;
    readonly visible: boolean;
    collapsed: boolean;
    parent: any;
    children: any[];
    readonly hasChildren: boolean;
    count: number;
    readonly isLoaded: boolean;
    readonly isPartialyLoaded: boolean;
    readonly hasParent: boolean;
    readonly firstChild: any;
    readonly lastChild: any;
    addChild(child: any): void;
    insertChildren(children: any[], index: number): void;
    deleteChildren(index: number | any[], count?: number): void;
    expand(unhide?: boolean): void;
    collapse(): void;
    toggleCollapse(recursive?: boolean, unhide?: boolean): void;
    clearChildren(): void;
    walk(cb: (m: any) => unknown | void): void;
    walkVisible(cb: (m: any) => unknown | void): void;
    walkUp(cb: (m: any) => unknown | void): void;
    _sort(comparer: (a: any, b: any) => number): void;
    sort(comparer: (a: any, b: any) => number): void;
}) & tree_2.Constructor<Populatable>;

declare type NodePlaceholder = {
    placeholder: true;
    parent: NodeModel;
    loading?: boolean;
    element?: HTMLElement;
};

declare enum NodeSelectionStatus {
    None = 0,
    Checked = 1,
    CheckedByParent = 2,
    Unchecked = 3
}

declare type NodeSource = {
    k?: string;
    v?: string;
    key?: string;
    value?: string;
    t?: string;
    s?: boolean;
    ch?: boolean;
    icon?: IconSpec | string;
    folder?: FolderOptions;
    props?: CustomProperties;
    renderer?: TreeNodeRenderer;
} & tree_2.TreeNodeSource;

declare function normalizeSerializedValues(data: (string | number | SerializedValue)[]): SerializedValue[];

declare function not(value: unknown): boolean;

declare type NumberFormatOptions = {
    /** number color */
    color?: string;
    /** unit of measure */
    text?: string;
    /** Sign display method. */
    signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero' | 'negative';
    /** display brackets for negative values */
    brackets?: boolean;
    /** empty string format */
    empty?: boolean;
} & Intl.NumberFormatOptions;

declare type NumberFormatString = string;

declare type NumberFormatterFunction = ValueFormatter<number>;

declare function NumberRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

export declare namespace numbers {
    export {
        mod,
        romanize,
        isNumberFormat,
        getNumberFormatter,
        createNumberFormatter,
        stringFormatToNumberFormat,
        fixNumberFormat,
        getLocalDecimalSeparator,
        NumberFormatOptions,
        NumberFormatterFunction,
        NumberFormatString,
        isExtendedNumberFormat,
        FormatType
    }
}

declare class NumericInput extends LitElement {
    static styles: CSSResult[];
    format: string;
    value: number;
    min: number;
    max: number;
    locale: string;
    disabled: boolean;
    buttons: boolean;
    increment: number;
    input: HTMLInputElement;
    editing: boolean;
    private _lastInputValue;
    private _lastValue;
    private _formatter;
    get formatter(): numbers.NumberFormatterFunction;
    private _editingFormatter;
    get editingFormatter(): numbers.NumberFormatterFunction;
    get formattedValue(): string;
    get hasButtons(): boolean;
    resetFormatters(): void;
    willUpdate(props: Map<PropertyKey, unknown>): void;
    constructor();
    focus(): void;
    inc(value?: number): void;
    private _dispatchChangeEvent;
    private isValidNumber;
    _onKeyDown: (e: KeyboardEvent) => void;
    _onInput: (e: InputEvent) => void;
    _onFocus: () => void;
    _onBlur: () => void;
    _onButtonClick: (e: MouseEvent) => void;
    render: () => TemplateResult<1>;
}

declare function numToPixels(n: number): string;

declare class ObjectEvent extends GridEvent {
    readonly object: ObjectModel;
    readonly host: ObjectHost;
    constructor(type: string, args: Partial<ObjectEvent>);
}

declare class ObjectHost extends LitElement implements ComponentContainer, Layout {
    static styles: CSSResult[];
    grid: Grid;
    active: boolean;
    model: ObjectModel;
    body: HTMLElement;
    createComponent: ComponentFactory<HTMLElement>;
    component: HTMLElement;
    private resizeObserver;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getComponent(): Promise<HTMLElement>;
    updated(props: Map<string, unknown>): Promise<void>;
    updatePosition: () => void;
    layout(): void;
    _onHeadMouseDown: (e: MouseEvent) => void;
    render: () => TemplateResult<1>;
}

declare type ObjectModel = {
    location: Location_2;
    size: Size;
    zIndex?: number;
};

declare function odd(x: number): number;

declare function offset(_ref: unknown, rows: number, columns: number, height?: number, width?: number): unknown[];

declare class OmegaComponent extends LitElement {
    static styles: CSSResultGroup;
    get parentComponent(): LitElement;
    get parentOmegaComponent(): OmegaComponent;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

declare function on<T extends Event>(elm: HTMLElement, event: string, selector: string, matchCallback: OnCallbackFunction<T>, notMatchCallback?: OnCallbackFunction<T>): HTMLElement;

declare type OnCallbackFunction<T extends Event> = (e: T, elm: HTMLElement) => void;

declare type OpenDialogOptions = DialogOptions & {
    id?: ComponentId;
};

declare type Operator = ArythmeticOperator | LogicalOperataor;

/**
 * Operator precedence and associativity
 * Map<operator_token, [operator, precedence, associativity]>
 */
declare const operatorMap: Map<Operator, OperatorSpec>;

/**
 * [javascript operator, precedence, associativity]
 */
declare type OperatorSpec = [string, number, number];

declare type Options = {
    /** formatting, numbers, dates, etc */
    formatLocale?: string;
    /** translation */
    locale?: string;
    dateFormat?: DateFormatString;
    dateFormatter?: DateFormatterFunction;
    systemDecimalSeparator?: DecimalSeparator;
    fontSize?: number;
    user?: User;
};

declare type Options_2 = {
    alwaysRefresh?: boolean;
    nodeHeight?: number;
    renderingNodeTreshold?: number;
    selectMode?: SelectMode | string;
    levelIndent?: number;
    maxLevel?: number;
    globalLevels?: boolean;
    levelsAlwaysVisible?: boolean;
    checkboxes?: boolean;
    expanders?: boolean;
    allowEmpty?: boolean;
    autoClose?: boolean;
    search?: boolean;
    fileDrop?: boolean;
    pageSize?: number;
    customSearch?: boolean;
    folderOptions?: FolderOptions;
    itemProperties?: ItemProperty[];
    itemTypeOptions?: Record<string, ItemTypeOptions>;
    customStyle?: CSSResultOrNative | string | (CSSResultOrNative | string)[];
    nodeRenderer?: (div: HTMLDivElement, node: NodeModel) => string | TemplateResult_2<1> | void;
    afterRenderer?: (div: HTMLDivElement, node: NodeModel) => void;
} & Options;

declare type Options_4 = Options & {
    commandWindow?: boolean;
    editing?: {
        headers?: boolean;
        conditionalStyles?: boolean;
        names?: boolean;
        sparklines?: boolean;
    };
};

declare type Options_5 = {
    viewMode?: ViewMode;
    /** default number of rows */
    rows?: number;
    /** default number of columns */
    columns?: number;
    /** readOnly cells */
    readOnly?: boolean;
    /** render column with row numbers */
    rowNumbers?: boolean;
    /** render column with row numbers */
    rowResize?: boolean;
    /** default row priority */
    rowPriority?: number;
    /** render column with row tree outline */
    rowTree?: TreeOptions;
    /** render header row with column letters */
    colLetters?: boolean;
    /** render row with column tree outline */
    columnTree?: TreeOptions;
    /** default column priority */
    columnPriority?: number;
    /** render column with row numbers */
    columnResize?: boolean;
    /** render tree buttons in column header labels */
    columnHeaderTreeButtons?: boolean;
    /** number of freezed rows on the top */
    freezeTop?: number;
    /** number of freezed columns on the left */
    freezeLeft?: number;
    /** number of freezed columns on the right, not implemented yet */
    freezeRight?: number;
    /** number of freezed rows on the bottom, not implemented yet */
    freezeBottom?: number;
    /** default font size */
    fontSize?: number;
    /** default row height */
    rowHeight?: number;
    /** remove row hidden property after its parent is expanded */
    unhideRowAfterExpand?: boolean;
    /** default column width */
    columnWidth?: number;
    /** remove column hidden property after its parent is expanded */
    unhideColumnAfterExpand?: boolean;
    /** style source are native css styles */
    cssStyles?: boolean;
    /** cell border visibility */
    grid?: boolean;
    /** column filter options */
    filters?: FilterOptions;
    /** default number format */
    numberFormat?: string;
    /** tries to repair invalid number/date formats */
    fixNumberFormat?: boolean;
    /** shows click indicator even in cells without value */
    emptyClickable?: boolean;
    /** custom number formatter function */
    numberFormatter?: numbers.NumberFormatterFunction;
    /** custom date formatter function */
    dateFormatter?: dates.DateFormatterFunction;
    /** enables default cell editing */
    editable?: boolean;
    /** enables default cell commenting */
    commentable?: boolean;
    /** enables autofill function */
    autofill?: boolean;
    /** number of rows on one page for dynamic row fetching */
    pageSize?: number;
    /** enables command window */
    commandWindow?: boolean;
    /** enables undo/redo */
    undoRedo?: boolean;
    /** location of cell with level buttons */
    levelButtonCell?: {
        c: number;
        r: number;
    };
    /** shows placeholder if grid is empty */
    emptyPlaceholder?: boolean;
    /** custom cell renderer applied after default renderers */
    afterRenderer?: Renderer;
    /** factor of cell indentation */
    cellIndentFactor?: number;
    /** factor of level indentation */
    levelIndentFactor?: number;
    /** menu options */
    menus?: MenuOptions;
    /** editing options */
    editing?: EditingOptions;
    /** selecting options */
    selecting?: SelectingOptions;
    /** comment options */
    comments?: CommentOptions;
    /** scrolling options */
    scrolling?: ScrollingOptions;
    /** event options */
    events?: EventOptions;
    /** max number of sorted columns, deprecated */
    maxSortingColumns?: number;
    /** enabled column sorting, deprecated */
    columnSorting?: boolean;
    /** column sorting options */
    sorting?: SortingOptions;
    /** allow invalid cell values */
    allowInvalid?: boolean;
    /** first cell in viewport */
    firstCell?: CellAddress;
    /** cell element caching */
    cellCache?: boolean;
    /** use single cell model instance for all grid cells */
    singleCellModel?: boolean;
} & Options;

declare type OptionSource = Omit<Options_5, 'rowTree' | 'columnTree' | 'filters'> & {
    rowTree?: boolean | TreeOptions;
    columnTree?: boolean | TreeOptions;
    filters?: boolean | FilterOptions;
};

declare function or(...args: ArrayArg): boolean;

declare type Orientation = 'vertical' | 'horizontal';

declare class Overlay extends LitElement {
    static defaultLoaderImage: string;
    static defaultLoaderIcon: string;
    static styles: CSSResult[];
    text: string;
    striped: boolean;
    loaderImage: string;
    loaderIcon: string;
    defaultLoader: boolean;
    willUpdate(): void;
    show(parent: HTMLElement, position?: DirectionalPosition, size?: number): void;
    hide: () => HTMLElement;
    render: () => TemplateResult<1>;
}

export declare const package: {
    name: string;
    version: string;
};

declare class Panel extends LitElement {
    static styles: CSSResult[];
    text: string;
    icon: string | IconSpec;
    scrollable: boolean;
    closable: boolean;
    collapsible: boolean;
    collapsed: boolean;
    arrowPosition: HorizontalPosition;
    bodySlot: HTMLSlotElement;
    body: HTMLDivElement;
    header: HTMLDivElement;
    private contentHeight;
    private collapsing;
    private interval;
    _onHeaderClick: () => void;
    animateCollapse(): void;
    firstUpdated(): void;
    render: () => TemplateResult<1>;
    layout(): void;
}

declare function parse(date: string, locale: string): Date;

declare type PatternStyle = 'solid' | 'darkGray' | 'mediumGray' | 'lightGray' | 'gray125' | 'gray0625' | 'darkHorizontal' | 'darkVertical' | 'darkDown' | 'darkUp' | 'darkGrid' | 'darkTrellis' | 'lightHorizontal' | 'lightVertical' | 'lightDown' | 'lightUp' | 'lightGrid' | 'lightTrellis';

declare type PeriodType = 'y' | 'q' | 'm' | 'w' | 'd';

declare function PI(): number;

/**
 * Trims the leading hash sign.
 * @param strColor
 * @returns
 */
declare function plainHex(strColor: string): string;

declare abstract class Plugin_2<T extends HTMLElement> {
    static pluginName: string;
    protected component: T;
    init(component: T): void;
}

declare class Plugins<T extends HTMLElement> {
    readonly component: T;
    readonly plugins: Map<string, Plugin_2<T>>;
    constructor(component: T);
    get(name: string): Plugin_2<T>;
    register(plugin: Plugin_2<T>): this;
}

export declare const plugins: {
    xlsx: typeof pluginXLSX;
};

declare namespace pluginXLSX {
    export {
        SheetjsLoader as loader,
        ExportOptions,
        ExportableGridModel,
        getWorksheetColumns,
        getWorksheetRows,
        getWorksheetMerges,
        getWorksheetHeaderCells,
        convertStyle,
        getWorksheetCells,
        getWorksheetConditionalFormats,
        detectOutlineRowDirection,
        detectOutlineColumnDirection,
        createWorksheet,
        createWorkbook,
        exportXLSX,
        getWorkbookNames,
        createModel,
        createModelFromWorkbook,
        createModelFromArrayBuffer,
        XlsxEditorPlugin,
        SheetjsLoader
    }
}

declare interface Populatable {
    populate(source: Record<PropertyKey, unknown>): void;
    getSourceData(): Record<PropertyKey, unknown>;
}

declare function power(base: number, exponent: number): number;

declare const prefixFormula: (value: string) => string;

declare function product(...args: ArrayArg): number;

declare const px: typeof numToPixels;

declare function quotient(divident: number, divisor: number): number;

declare function radians(angle: number): number;

declare function rand(): number;

declare function randarray(rows: number, columns: number): Matrix<number>;

declare function randbetween(min: number, max: number): number;

declare type RangeAddress = string;

declare type RangeCoords = {
    c1: number;
    r1: number;
    c2: number;
    r2: number;
};

declare type RefreshOptions = {
    vertical?: boolean;
    horizontal?: boolean;
    rerenderTable?: boolean;
};

declare function register(name: string, c: CustomElementConstructor, ext?: string, prefix?: string): void;

declare function registerDateLocale(locale: Locale): void;

declare function registerLocale(locale: LocaleId_2 | LocaleId_2[], items: LocalizeItem[]): void;

declare function remove(elm: HTMLElement): void;

declare function removeAccents(str: string): string;

declare type Renderer = (div: HTMLDivElement, cell: CellModel) => HTMLDivElement;

export declare namespace renderers {
    export {
        getCellRenderer,
        cellTypeRendererMap,
        BaseRenderer,
        applyStyle,
        CheckboxRenderer,
        NumberRenderer,
        TextRenderer,
        DropdownRenderer,
        GeneralRenderer,
        DateTimeRenderer
    }
}

declare type RequestFilters = {
    filter?: {
        c: number;
        term: FilterValue;
    }[];
    order?: {
        c: number;
        ord: number;
    }[];
    parent?: {
        r: number;
        props: CustomProperties;
    };
    offset?: number;
};

declare interface Require {
    (paths: string[], callback?: () => void): void;
    config: (options: {
        [key: string]: unknown;
    }) => void;
}

declare class ResizeEvent extends Event {
    readonly resizeArgs: ResizeEventArgs;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly mouseX: number;
    readonly mouseY: number;
    readonly deltaX: number;
    readonly deltaY: number;
    constructor(type: string, resizeArgs: ResizeEventArgs);
}

declare type ResizeEventArgs = {
    offsetX?: number;
    offsetY?: number;
    clientX?: number;
    clientY?: number;
    mouseX?: number;
    mouseY?: number;
    deltaX?: number;
    deltaY?: number;
};

declare function reverseColumns<T>(m: Matrix<T>): T[][];

declare function reverseRows<T>(m: Matrix<T>): T[][];

/**
 * Returns the rightmost characters from a text value.
 *
 * @link https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f
 * @link https://support.google.com/docs/answer/3094087
 * @param v string
 * @param count number
 * @returns string
 */
declare function right(v: string, count?: number): string;

declare function romanize(num: number): string | number;

declare function round(value: number, places: number): string;

declare function rounddown(value: number, places: number): number;

declare function roundup(value: number, places: number): number;

declare function row(address?: string): number;

declare class RowModel extends RowModel_base {
    origIndex: number;
    visibleIndex: number;
    private _singleCell;
    private _cells;
    get cells(): CellModel[];
    private _data;
    get data(): Record<string | number, any>;
    set data(v: Record<string | number, any>);
    private _height;
    get height(): number;
    set height(value: number);
    private _priority;
    get priority(): number;
    set priority(value: number);
    get address(): string;
    get range(): CellRange;
    get hasFormula(): boolean;
    get formula(): string;
    set formula(v: string);
    get values(): unknown[];
    isCellInitialized: (c: number) => boolean;
    cell(c: number, source?: CellSource): CellModel;
    constructor(model: GridModel, source?: RowSource);
    populate(source: RowSource): void;
    getSourceData(): RowSource;
    expand(unhide?: boolean): void;
    collapse(): void;
    get prev(): RowModel;
    get next(): RowModel;
    get prevVisible(): RowModel;
    get nextVisible(): RowModel;
    /**
     * Checks if cell has formula, even for uninitialized cells
     * @param c number
     * @returns boolean
     */
    hasCellFormula(c: number): any;
    hasCellName(c: number): boolean;
    insertColumns(index: number, count: number, shiftFormulas?: boolean): void;
    deleteColumns(index: number, count: number, shiftFormulas?: boolean): CellModel[];
    clearCalculatedValues(): void;
}

declare const RowModel_base: (new (...input: any[]) => {
    index: number;
    parentIndex: number;
    level: number;
    _children: any[];
    _count: number;
    _parent: any;
    _collapsed: boolean;
    _hidden: boolean;
    _filterState: tree_2.FilterState;
    _filterable: boolean;
    _sortable: boolean;
    populate(source: tree_2.TreeNodeSource): void;
    getSourceData(): tree_2.TreeNodeSource;
    readonly filterable: boolean;
    readonly sortable: boolean;
    filterState: tree_2.FilterState;
    hidden: boolean;
    readonly visible: boolean;
    collapsed: boolean;
    parent: any;
    children: any[];
    readonly hasChildren: boolean;
    count: number;
    readonly isLoaded: boolean;
    readonly isPartialyLoaded: boolean;
    readonly hasParent: boolean;
    readonly firstChild: any;
    readonly lastChild: any;
    addChild(child: any): void;
    insertChildren(children: any[], index: number): void;
    deleteChildren(index: number | any[], count?: number): void;
    expand(unhide?: boolean): void;
    collapse(): void;
    toggleCollapse(recursive?: boolean, unhide?: boolean): void;
    clearChildren(): void;
    walk(cb: (m: any) => unknown | void): void;
    walkVisible(cb: (m: any) => unknown | void): void;
    walkUp(cb: (m: any) => unknown | void): void;
    _sort(comparer: (a: any, b: any) => number): void;
    sort(comparer: (a: any, b: any) => number): void;
}) & typeof ElementModel;

declare function rows(range: ArrayArg): number;

/** Source object type for grid row */
declare type RowSource = {
    h?: number;
    data?: Record<string | number, any>;
    /** if row priority is higher then column priority, row properties has precedence over column properties */
    priority?: number;
} & tree_2.TreeNodeSource & ElementSource;

declare class RuleForm extends LitElement {
    static styles: CSSResult[];
    model: GridModel;
    format: ConditionalFormat;
    rangesInput: Input;
    conditionInput: Input;
    cminInput: DropdownColorPicker;
    cmidInput: DropdownColorPicker;
    cmaxInput: DropdownColorPicker;
    colorInput: DropdownColorPicker;
    iconList: DropdownList;
    styleForm: StyleForm;
    thresholds: NodeListOf<RuleThreshold>;
    _onStyleChange(e: events.ChangeEvent, format: ConditionalFormat): void;
    updateFormat(): void;
    renderFormulaForm: () => TemplateResult<1>;
    renderScaleForm: () => TemplateResult<1>;
    renderBarForm: () => TemplateResult<1>;
    iconItemRenderer: (div: HTMLDivElement, index: number, item: MenuItem) => TemplateResult<1>;
    renderIconForm: () => TemplateResult<1>;
    render: () => TemplateResult<1>;
}

declare class RuleList extends LitElement {
    static styles: CSSResult[];
    grid: Grid;
    model: GridModel;
    list: List;
    connectedCallback(): void;
    updateList: () => void;
    moveRuleUp(index: number): void;
    moveRuleDown(index: number): void;
    deleteRule(index: number): void;
    toggleRuleStop(index: number): void;
    addRule(): void;
    _onApplyClick: () => void;
    _onInputChange(e: Event, format: ConditionalFormat): void;
    _onStyleChange(e: events.ChangeEvent, format: ConditionalFormat): void;
    getFormatByIndex(index: number): ConditionalFormat;
    changeType(index: number, type: ConditionalFormatType): void;
    _itemRenderer: (_div: HTMLDivElement, index: number) => TemplateResult<1>;
    render: () => "" | TemplateResult<1>;
}

declare class RuleThreshold extends LitElement {
    static styles: CSSResult;
    value: ConditionalFormatThresholdItem;
    first: boolean;
    format: string;
    typeInput: DropdownList;
    valueInput: NumericInput;
    get isDisabled(): boolean;
    _onTypeChange: (e: events.ChangeEvent) => void;
    _onChange: () => void;
    render: () => TemplateResult<1>;
}

declare function sanitizeSheetName(name: string): string;

declare type Scalar<T = unknown> = T;

declare function scalarOperation<T = number>(s1: Scalar<T>, s2: Scalar<T>, operator: Operator): Scalar;

declare class ScriptLoader {
    #private;
    static scripts: Map<string, boolean>;
    static load(url: string, doc?: Document & {
        __ogid?: string;
    }): Promise<void>;
}

declare type ScrollingOptions = {
    /** maximum proximity of cursor to scrollbar to be visible */
    scrollbarVisibilityTreshold?: number;
    /** enable vertical overscroll */
    verticalOverscroll?: boolean;
    /** enable horizontal overscroll */
    horizontalOverscroll?: boolean;
};

declare class Search extends LitElement {
    searchInput: HTMLInputElement;
    tree: Tree;
    static styles: CSSResult[];
    debounceKeyUp: {
        (this: unknown, ...args: [e: KeyboardEvent] & any[]): Promise<Promise<void>>;
        cancel: (reason?: any) => void;
    };
    _onKeyDown: (e: KeyboardEvent) => void;
    render: () => TemplateResult<1>;
}

declare function sec(x: number): number;

declare function sech(x: number): number;

declare type SectionRenderer = (div: HTMLDivElement, section: CommandGroup) => string | TemplateResult<1> | null;

declare type SelectedItemParams = {
    levels: Map<number, boolean>;
} & ItemMetadata;

declare type SelectingOptions = {
    enabled?: boolean;
    multiSelect?: boolean;
};

declare class SelectionModel {
    range: CellRange;
    activeCell: CellRange;
    color: string;
    hidden: boolean;
    get activeCellCoords(): {
        c: number;
        r: number;
    };
    constructor(c1: number, r1: number, c2?: number, r2?: number);
    static fromRange(r: CellRange): SelectionModel;
    setCoords(c1?: number, r1?: number, c2?: number, r2?: number): void;
    setRange(range: CellRange | string): void;
    move(c: number, r: number, maxColumns?: number, maxRows?: number): void;
    moveRange(c: number, r: number, maxColumns?: number, maxRows?: number): void;
    moveActiveCell(c: number, r: number): void;
}

declare enum SelectMode {
    None = "none",
    Single = "single",
    Multiple = "multiple",
    MultipleLevels = "multipleLevels"
}

declare class Selector extends LitElement {
    static styles: CSSResult[];
    private topLeftCell?;
    private topRightCell?;
    private bottomLeftCell?;
    private bottomRightCell?;
    private activeCell?;
    private autofillSelector;
    private moveSelector;
    private baseCell;
    private _animationTimer;
    private _autofillDirection;
    get autofillDirection(): Direction;
    private _autofillRange;
    get autofillRange(): CellRange;
    private _autofilling;
    get isAutofilling(): boolean;
    private _moving;
    get isMoving(): boolean;
    private _resizing;
    private _resizingDirection;
    get isResizing(): boolean;
    private _selecting;
    get isSelecting(): boolean;
    get isSelectorOperationActive(): boolean;
    get table(): Table;
    index: number;
    autofill: boolean;
    movable: boolean;
    resizable: boolean;
    subselector: boolean;
    color: string;
    borderWidth: number;
    animated: boolean;
    selection: CellRange;
    activeCellRange: CellRange;
    grid: Grid;
    handleElm: HTMLDivElement;
    svgAnimation: SVGElement;
    moveHandleLeftElm: HTMLDivElement;
    moveHandleTopElm: HTMLDivElement;
    moveHandleRightElm: HTMLDivElement;
    moveHandleBottomElm: HTMLDivElement;
    subselectorElm: HTMLDivElement;
    private _isVisible;
    get isVisible(): boolean;
    hide: () => void;
    show: () => void;
    highlightAutofillRange(): void;
    createAutofillSelector(): HTMLDivElement;
    stopAutofilling(dispatchEvent?: boolean): void;
    updateAutofilling(c: number, r: number): void;
    getMoveSelector(): Selector;
    startMoving(baseCell: CellRange): void;
    updateMoving(c: number, r: number): void;
    stopMoving(dispatchEvent?: boolean): void;
    startResizing(direction: DiagonalDirection): void;
    updateResizing(c: number, r: number): void;
    stopResizing(dispatchEvent?: boolean): void;
    startSelecting(baseCell: CellRange): void;
    select(selection: CellRange, dispatchEvent?: boolean): void;
    stopSelecting(_dispatchEvent?: boolean): void;
    /**
     * Updates selector state after table moving events
     * @param c column index
     * @param r row index
     */
    updateMovingOperations(c: number, r: number): void;
    stopSelectorOperations(dispatchEvent?: boolean): void;
    _onMoveHandleMouseDown: (e: PointerEvent, _side: DirectionalPosition) => void;
    _onResizeHandleMouseDown: (e: PointerEvent, direction: DiagonalDirection) => void;
    _onHandleMouseUp: (e: PointerEvent) => void;
    _onHandleMouseDown: () => void;
    render: () => TemplateResult<1>;
    startAnimation(): void;
    stopAnimation(): void;
    disconnectedCallback(): void;
    willUpdate(): void;
    updated(): void;
    updatePosition(): void;
}

declare class SelectorEvent extends GridEvent {
    selector: Selector;
    constructor(type: string, args?: Partial<SelectorEvent>);
}

declare class SelectorMoveEvent extends SelectorEvent {
    fromRange: CellRange;
    toRange: CellRange;
    constructor(args?: Partial<SelectorMoveEvent>);
}

declare function sequence(rows: number, columns: number, start?: number, step?: number): Matrix<number>;

declare function serialDateToDate(sn: number): Date;

declare type SerializedValue = [string, number?, (0 | 1)?, ItemMetadata?];

declare class SerialzieEvent<TValue = any> extends Event {
    data: TValue;
    constructor(data: TValue);
}

declare function setBorderWidth(elm: HTMLElement, widths: {
    r?: number;
    b?: number;
    l?: number;
    t?: number;
}): void;

declare function setCenterPosition(elm: HTMLElement, parent: HTMLElement, options?: {
    vertical: boolean;
    horizontal: boolean;
}): void;

declare function setClasses(elm: HTMLElement, classes?: string[]): HTMLElement;

declare function setInset(elm: HTMLElement | SVGElement, value: number): void;

declare function setLineHeight(elm: HTMLElement, height: number): void;

declare function setLocale(locale: LocaleId_2): void;

declare function setMargin(elm: HTMLElement, margin: {
    r?: number;
    b?: number;
    l?: number;
    t?: number;
}): void;

declare function setMaxSize(elm: HTMLElement, size: {
    w?: number | string;
    h?: number | string;
}): HTMLElement;

declare function setMinSize(elm: HTMLElement, size: {
    w?: number | string;
    h?: number | string;
}): HTMLElement;

declare function setPadding(elm: HTMLElement, padding: {
    r?: number;
    b?: number;
    l?: number;
    t?: number;
}): void;

declare function setPosition(elm: HTMLElement | SVGElement, position: {
    r?: number;
    b?: number;
    l?: number;
    t?: number;
}): void;

declare function setSize(elm: HTMLElement, size: {
    w?: number | string;
    h?: number | string;
}, minSize?: boolean): HTMLElement;

declare function setZIndex(elm: HTMLElement, zIndex: number): void;

declare const SHEET_NAME_REGEX: RegExp;

declare type SheetDependencyMap = Map<string, string>;

declare class SheetjsLoader {
    static xlsx: typeof XLSXNS;
    static path: string;
    static init(path: string): void;
    static get(): Promise<typeof XLSXNS>;
    static getSync(): typeof XLSXNS;
    static load(): Promise<typeof XLSXNS>;
}

declare type ShiftOptions = {
    /** Index of the first shifted row/column */
    index: number;
    /** Number of rows/columns to shift */
    offset: number;
    /** Shift direction up/down for rows, left/right for columns */
    direction: Direction;
    /** Name of the sheet where the shift occured */
    sheet?: string;
    /** Force shift on all references */
    allSheets?: boolean;
    /** Maximum affected index */
    maxIndex?: number;
    /** Shift anchored coords */
    ignoreAnchors?: boolean;
};

declare function showCell(cell: HTMLTableCellElement): void;

declare function showElement(elm: HTMLElement, defaultDisplayStyle?: string): HTMLElement;

declare class Sidebar extends LitElement implements Layout {
    static styles: CSSResult;
    bucket: Bucket;
    componentId: string;
    container: HTMLDivElement;
    private _component;
    loadComponent(id?: string): Promise<void>;
    updated(props: Map<PropertyKey, unknown>): Promise<void>;
    layout(): void;
    render: () => TemplateResult<1>;
}

declare type SidebarComponent = LitElement & {
    grid: Grid;
    group: GridGroup;
    model: GridModel;
    range: CellRange;
};

declare type SidebarComponentType = 'config' | 'headers' | 'rules' | 'sparklines' | 'names' | ComponentId;

declare class Sidemenu extends LitElement {
    settings: SidemenuSettings;
    list: List;
    static styles: CSSResult;
    private tooltipRef;
    get tooltip(): Tooltip;
    get count(): number;
    private _hideTimer;
    constructor();
    requestHide(): void;
    _onMouseMove: (_e: MouseEvent, elm: ListItemElement) => void;
    updated(): void;
    firstUpdated(): void;
    _itemRenderer: ListItemRenderer;
    render: () => TemplateResult<1>;
}

declare type SidemenuItem = {
    id: string;
    icon: string;
    statusIcon?: string;
    statusColor?: string;
    text?: string;
    tooltip?: string;
    color?: string;
};

declare type SidemenuSettings = {
    items: SidemenuItem[];
    activeIndex?: number;
};

declare function sign(value: number): 1 | -1 | 0;

declare function sin(x: number): number;

declare function sinh(x: number): number;

declare type Size = {
    w: number;
    h: number;
};

declare class Sizer extends LitElement {
    private snappedTo;
    private offsetElement;
    private lineElm;
    private _resizing;
    private startX;
    private startY;
    private offset;
    private startWidth;
    private startHeight;
    private startResize;
    private mouseDownTime;
    static styles: CSSResult;
    orientation: Orientation;
    noGuideLine: boolean;
    get resizing(): boolean;
    constructor();
    show: () => void;
    hide: () => void;
    _onMouseLeave: () => void;
    _onMouseDown: (e: MouseEvent) => void;
    private startResizing;
    _onMouseMove: (e: MouseEvent) => void;
    _onMouseUp: (e: MouseEvent) => void;
    render(): void;
    snap(elm: HTMLElement, offsetElement?: HTMLElement): void;
}

declare class SlideEvent extends Event {
    readonly value: number;
    constructor(type: string, value: number);
}

declare class Slider extends LitElement {
    #private;
    static readonly DEFAULT_MAX_VALUE = 100;
    static readonly DEFAULT_PAGE_SIZE = 20;
    static readonly SLIDE_DELAY = 5;
    static styles: CSSResult[];
    direction: SliderDirection;
    value: number;
    maxValue: number;
    cursor: string;
    pageSize: number;
    hidden: boolean;
    innerBar: HTMLDivElement;
    private barRef;
    private pos0;
    private page0;
    private _value;
    private _sliding;
    get sliding(): boolean;
    show: () => boolean;
    hide: () => boolean;
    private calcValue;
    get barSize(): number;
    private debounceSlide;
    private onDocumentMouseMove;
    private onDocumentMouseUp;
    _onMouseDown: (e: MouseEvent) => void;
    setText(text: string): void;
    _onClick: (e: MouseEvent) => void;
    render: () => TemplateResult<1>;
    willUpdate(props: Map<string, unknown>): void;
    updated(props: Map<string, unknown>): void;
    updatePosition(): void;
    get scrollKey(): "scrollTop" | "scrollLeft";
    _onSlide: () => void;
    _onScroll: () => void;
    _onWheel: (e: WheelEvent) => void;
    _onTouchStart: (e: TouchEvent) => void;
    _onTouchEnd: () => void;
    _onTouchMove: (e: TouchEvent) => void;
    attachElement(element: HTMLElement): void;
    deatachElement(): void;
}

declare enum SliderDirection {
    Vertical = "vertical",
    Horizontal = "horizontal"
}

declare class SortableList extends List {
    static sourceList: SortableList;
    connectedLists: SortableList[];
    private _sorting;
    get sorting(): boolean;
    get connectedSorting(): boolean;
    private sortIndex;
    private targetIndex;
    private markedItem;
    private autoscrollTimer;
    private autoscrollDirection;
    static contentStyles: CSSResult[];
    constructor();
    startSorting(item: ListItemElement): void;
    removeMark(): void;
    stopSorting(dispatchEvent?: boolean): void;
    startAutoscroll(direction: Direction): void;
    stopAutoscroll(): void;
    _onMouseDown: (e: MouseEvent) => void;
    _onMouseUp: () => void;
    _onMouseMove: (e: MouseEvent) => void;
    firstUpdated(): void;
}

declare class SortingArrow extends LitElement {
    static styles: CSSResult;
    sortSettings: SortSettings;
    render(): TemplateResult<1> | "";
}

/**
 * Class for sorting rows by columns sort settings
 */
declare class SortingModel extends EventTarget {
    readonly model: GridModel;
    private colMap;
    private _settings;
    get settings(): SortSettings[];
    set settings(v: SortSettings[]);
    constructor(model: GridModel, _settings?: SortSettings[]);
    /**
     * Get sorting settings for specified column
     * @param c column index
     */
    get(c: number): SortSettings;
    /**
     * Add sorting settings for specified column
     * @param c column index
     * @param ord sorting order
     * @param custom if true, sorting will not be automaticaly applied
     */
    sort(c: number, ord?: SortOrder, custom?: boolean): SortSettings;
    /**
     * Apply current sorting settings to rows
     */
    applySort(): void;
    /**
     * Reset row order to default state
     */
    resetSort(): void;
    /**
     * Use current sorting settings as default row order
     */
    persistSort(): void;
}

declare type SortingOptions = {
    /** column sorting enabled */
    enabled?: boolean;
    /** maximum number of columns that can be sorted */
    maxColumns?: number;
    /** initial sorting settings */
    defaultSettings?: SortSettings[];
};

declare enum SortOrder {
    Asc = 1,
    Desc = -1
}

declare function sortRanges(ranges: CellRange[]): CellRange[];

declare type SortSettings = {
    c: number;
    ord: SortOrder;
    index?: number;
};

declare class Sparkline extends LitElement {
    static styles: CSSResult;
    cell: CellModel;
    svg: SVG.Doc;
    renderLines(points: [number, number][], options: SparklineOptions): void;
    renderColumns(points: [number, number][], options: SparklineOptions): void;
    renderSparkline(): void;
    timeout: number;
    updated(): void;
}

declare type SparklineDataRanges = [CellRange, string?][];

declare type SparklineExtremeValue = 'auto' | 'common' | number;

declare class SparklineForm extends LitElement {
    static styles: CSSResult[];
    grid: Grid;
    model: GridModel;
    list: List;
    _groupIndexMap: Map<number, number>;
    get groupIndexMap(): Map<number, number>;
    connectedCallback(): void;
    updateList: () => void;
    deleteGroup(index: number): void;
    addGroup(): void;
    _onApplyClick: () => void;
    _onInputChange(e: Event, groupIndex: number): void;
    _onOptionsToolbarAction: (e: actions.ActionEvent, groupIndex: number) => void;
    getToolbarValues(options: SparklineOptions): Record<string, unknown>;
    _itemRenderer: (_div: HTMLDivElement, index: number) => TemplateResult<1>;
    render: () => "" | TemplateResult<1>;
}

declare type SparklineGroupDef = SparklineOptions & {
    dataRanges: SparklineDataRanges;
    locRange: CellRange;
};

declare type SparklineItem = [number, SparklineDataRanges];

declare type SparklineOptions = {
    /** Minimum value of sparkline (absolute value, "auto", "common") */
    minValue: SparklineExtremeValue;
    /** Maximum value of sparkline (bsolute value, "auto", "common") */
    maxValue: SparklineExtremeValue;
    /** Chart type ("line", "column") */
    type: SparklineType;
    style: {
        color: string;
        weight: number;
    };
    marker?: {
        color: string;
    };
};

declare class Sparklines {
    readonly model: GridModel;
    private _dependencies;
    get dependencies(): Dependencies;
    map: Map<string, SparklineItem>;
    groups: Map<number, SparklineGroupDef>;
    extremes: Map<number, [number, number]>;
    maxIndex: number;
    updateRangeMap: boolean;
    constructor(model: GridModel, sourceData?: SparklineSource[]);
    populate(sourceData: SparklineSource[]): void;
    getSourceData(): SparklineSource[];
    has(address: CellAddress): boolean;
    get(address: CellAddress): SparklineItem;
    createDependencies(address: CellAddress): void;
    updateRangeMaps(): void;
    getValues(address: CellAddress): number[];
    getExtremes(address: CellAddress): [number, number];
    createRangeMap(groupIndex: number, locRange: CellRange, dataRanges: SparklineDataRanges): void;
    add(locRange: CellRange, dataRanges: SparklineDataRanges, options?: SparklineOptions): void;
    update(groupIndex: number, locRange: CellRange, dataRanges: SparklineDataRanges, options?: SparklineOptions): void;
    delete(groupIndex: number): void;
    shift(options: ShiftOptions): void;
}

/** Source object type for sparkline definition */
declare type SparklineSource = {
    /** Cell range containing sparklines */
    location: RangeAddress;
    /** Cell ranges of sparkline data sources. Array or comma separated string. */
    data: RangeAddress | RangeAddress[];
    /** Sparkline options */
    options?: Partial<SparklineOptions>;
};

declare type SparklineType = 'line' | 'column';

declare namespace specialFunctions {
    export {
        erfc
    }
}

declare type SpillOptions = {
    cell: CellModel;
    values: Matrix;
    propertyCell?: CellModel;
    displayValues?: Matrix<string>;
};

declare type SpillResult = {
    cells: CellModel[];
    oldValues: CellValueType[];
    range: CellRange;
};

declare class SplitContainer extends LitElement implements Layout {
    static styles: CSSResult[];
    items: SplitContainerItem[];
    orientation: Orientation;
    containers: NodeListOf<HTMLElement>;
    overlay: HTMLDivElement;
    createComponent: ComponentFactory;
    sizer: Sizer;
    private indexMap;
    private dynamicSizeIndices;
    private _resizeIndex;
    private _resizeLastSize1;
    private _resizeLastSize2;
    protected defaultLayout: boolean;
    constructor();
    getContainer(index: number): HTMLElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    splitContainer(index: number): void;
    removeContainer(index: number): void;
    getContainerComponent(index: number): HTMLElement & Layout;
    _onMouseMove: (e: MouseEvent) => void;
    _debounceResize: {
        (this: unknown, ...args: [e: ResizeEvent] & any[]): Promise<void>;
        cancel: (reason?: any) => void;
    };
    setContainerSize(index: number, size: number | null): void;
    getContainerSize(index: number): number;
    resetContainerSizes(): void;
    collapse(index: number, collapse?: boolean): Promise<void>;
    willUpdate(props: Map<string, unknown>): void;
    getComponent(index: number, id?: ComponentId): HTMLElement | Promise<HTMLElement>;
    updateComponent(index: number): Promise<void>;
    updated(): Promise<void>;
    render: () => TemplateResult<1>;
    fillRemainingSpace(): void;
    layout(): void;
}

declare class SplitContainerEvent extends Event {
    readonly index: number;
    readonly component: HTMLElement;
    constructor(type: string, args: Partial<SplitContainerEvent>);
}

declare type SplitContainerItem = {
    id?: ComponentId;
    size?: number | null;
    collapsed?: boolean;
};

declare class SplitContainerResizeEvent extends Event {
    constructor(type: string);
}

declare function sqrt(x: number): number;

declare function sqrtpi(x: number): number;

declare namespace statisticalFunctions {
    export {
        average,
        average_weighted,
        avedev,
        min,
        max
    }
}

declare class Statusbar extends LitElement implements Layout {
    static styles: CSSResult[];
    leftItems: StatusbarItem[];
    rightItems: StatusbarItem[];
    createComponent: ComponentFactory;
    customComponents: HTMLDivElement;
    private components;
    layout(): void;
    render: () => TemplateResult<1>;
}

export declare namespace statusbar_2 {
    export {
        Statusbar,
        StatusbarItemType,
        StatusbarItem
    }
}

declare type StatusBarComponent = HTMLElement & {
    group: GridGroup;
    grid: Grid;
    range: CellRange;
};

declare type StatusbarItem = {
    id?: ComponentId;
    type: StatusbarItemType;
    icon?: string;
    text?: string;
};

declare type StatusbarItemType = 'button' | 'custom';

declare function stringFormatToNumberFormat(xlFormat: NumberFormatString): (string | NumberFormatOptions)[];

declare const stripFormulaPrefix: (value: string) => string;

declare function stripTime(date: Date): Date;

declare function strToNum(str: string): number;

declare interface Style extends TextStyle {
    /** Top Border */
    top?: Border;
    /** Bottom Border */
    bottom?: Border;
    /** Left Border */
    left?: Border;
    /** Right Border */
    right?: Border;
    /** Pattern Type (optional) */
    patternType?: PatternStyle;
    /** Cell Primary (background) Color */
    fgColor?: Color_2;
    /** Cell Secondary (background) Color */
    bgColor?: Color_2;
    /** Cell alignment properties */
    alignment?: Alignment;
    /** Cell background gradient angle */
    angle?: number;
    /** Cell background gradient segments */
    stops?: GradientStop[];
    /** Cell formula hidden when worksheet is locked */
    hidden?: boolean;
    /** Cell editable when worksheet is locked (inverse of "locked" in Excel) */
    editable?: boolean;
    /** cell icon */
    icon?: IconSpec;
    cssStyle?: CSSStyle;
    /** Style Name */
    style?: string;
    hash?: string;
    id?: number;
    [name: string]: unknown;
}

declare class StyleForm extends LitElement {
    static styles: CSSResult[];
    data: Style;
    toolbar: Toolbar;
    styleToToolbarValues(s: Style): Record<string, unknown>;
    connectedCallback(): void;
    _onAction: (e: actions.ActionEvent) => void;
    render: () => TemplateResult<1>;
}

declare class StyleModel {
    readonly model: GridModel;
    private _count;
    private hashmap;
    readonly map: Map<number, Style>;
    constructor(model: GridModel);
    add(styleSource: StyleSource): Style;
    populate(styles: (string | CSSStyle | Style)[]): void;
    get(id: number): Style;
    remove(style: number | Style): void;
    merge(...s: (number | Style)[]): Style;
    duplicate(id: number, props: Record<StylePropertyKey, unknown>): Style;
    set(id: number, props: Record<StylePropertyKey, unknown>): Style;
    unset(id: number, props: string[]): void;
    getSourceData(): Style[];
    clean(): void;
}

declare type StylePropertyKey = keyof Style;

declare type StyleSource = number | string | Style | CSSStyle;

declare const styleToCSStyle: (s: Style) => CSSStyle;

declare function sum(...args: ArrayArg<number>): number;

declare function sumif(v: ArrayArg<number>, cond: Condition, range?: ArrayArg<number>): number;

declare function sumproduct(...args: ArrayArg<number>): number;

declare function sumsq(v: ArrayArg<number>, cond: Condition): number;

declare class Switch extends LitElement {
    static styles: CSSResult[];
    text: string;
    color: ColorTypes;
    state: SwitchState;
    shape: 'round' | 'square' | 'hexagon';
    checkbox: HTMLInputElement;
    _onChange: () => void;
    updated(): void;
    render: () => TemplateResult<1>;
}

declare function _switch(...args: unknown[]): unknown;

declare class SwitchEvent extends ChangeEvent<SwitchState> {
}

declare type SwitchState = 'on' | 'off';

declare class TabContainer extends LitElement implements Layout {
    #private;
    static dropPosition: DirectionalPosition;
    static dragParent: TabContainer;
    static dropTarget: TabContainer;
    static styles: CSSResult[];
    set inactive(value: boolean);
    get inactive(): boolean;
    topLevelComponent: HTMLElement;
    items: TabItem[];
    closable: boolean;
    createComponent: ComponentFactory;
    tabs: Tabs;
    actions: actions.Action[];
    addButton: boolean;
    selectedIndex: number;
    tabPosition: VerticalPosition;
    cacheComponents: boolean;
    container: HTMLDivElement;
    overlay: HTMLDivElement;
    readonly components: Map<ComponentId, HTMLElement>;
    private currentComponent;
    get component(): HTMLElement;
    _firstLoad: boolean;
    layout(): void;
    updateTabs(): void;
    getComponent(componentId: ComponentId): Promise<HTMLElement>;
    loadComponent(componentId: ComponentId): Promise<void>;
    _onSelect: () => Promise<void>;
    _onRemove: (e: TabEvent) => void;
    open(item: TabItem, dispatchEvent?: boolean): void;
    willUpdate(): void;
    firstUpdated(): void;
    updated(props: Map<PropertyKey, unknown>): void;
    positionOverlay(pos: DirectionalPosition): HTMLElement;
    hideOverlay: () => void;
    calculateOverlayPosition(x: number, y: number): DirectionalPosition;
    _onDragover: (e: DragEvent) => void;
    _onDrop: () => void;
    _onDragStart: (_e: DragEvent) => void;
    _onDragStop: () => void;
    _onTabDrop: (e: DragEvent) => void;
    render: () => TemplateResult<1>;
}

declare class TabEvent extends Event {
    index: number;
    tabs: Tabs;
    tab: TabItem;
    uiEvent: UIEvent;
    constructor(type: string, args: Partial<TabEvent>);
}

declare type TabItem = {
    id: ComponentId;
    title?: string;
    hidden?: boolean;
    color?: string;
    icon?: string | IconSpec;
    unsaved?: boolean;
};

declare class Table extends LitElement {
    static styles: CSSResult[];
    private _viewport;
    private _viewportSize;
    private _freezeLeft;
    private bCache;
    private hCache;
    hRows: TableRow[];
    bRows: TableRow[];
    cols: HTMLTableColElement[];
    private _rowMap;
    private _colMap;
    private cornerDiv;
    grid: Grid;
    model: GridModel;
    rowOffset: number;
    colOffset: number;
    zoom: number;
    nogrid: boolean;
    renderAll: boolean;
    private tableRef;
    get table(): HTMLTableElement;
    private colgroupRef;
    get colgroup(): HTMLElement;
    private theadRef;
    get thead(): HTMLElement;
    private tbodyRef;
    get tbody(): HTMLElement;
    get colMap(): Map<number, number>;
    get rowMap(): Map<number, number>;
    getColumnByModelIndex: (c: number) => HTMLTableColElement;
    getColumnByGridIndex: (c: number) => HTMLTableColElement;
    getRowByModelIndex: (r: number) => TableRow;
    getRowByGridIndex: (r: number) => TableRow;
    getCellByGridIndex: (c: number, r: number) => TableCell;
    getCellByModelIndex: (c: number, r: number) => TableCell;
    getCellByCellModel: (m: CellModel) => TableCell;
    resetFreezeLeft: () => void;
    get freezeLeft(): number;
    _highlightedColHeaderCells: TableHeaderCell[];
    _highlightedRowHeaderCells: TableHeaderCell[];
    previewZoom(zoom: number): void;
    highlightColHeaderCells(columns: number[]): void;
    highlightRowHeaderCells(rows: number[]): void;
    get columnHeaderCount(): number;
    get rowHeaderCount(): number;
    get renderRowCount(): number;
    get renderColCount(): number;
    get totalHeaderHeight(): number;
    get treeHeaderWidth(): number;
    get treeHeaderHeight(): number;
    get totalHeaderWidth(): number;
    get viewportSize(): {
        w: number;
        h: number;
    };
    get viewport(): Viewport;
    get viewportRange(): CellRange;
    findColumnIndexByOffset(offset: number): number;
    findRowByOffset(offset: number): TableRow;
    findTableCellByOffset(x: number, y: number): TableCell;
    findNearestTableCellByOffset(x: number, y: number): TableCell;
    constructor();
    render: () => TemplateResult<1>;
    willUpdate(): void;
    updated(): void;
    clearHeaderCache: () => void;
    clearBodyCache: () => void;
    refresh(): void;
    createColumns(): void;
    createHeaderRows(): void;
    createBodyRows(): void;
    renderCells(update?: TableRenderOptions): void;
    renderEmptyBody(): void;
    renderHeader(): void;
    renderHeaderRowLetters(tr: HTMLTableRowElement, index: number): void;
    renderHeaderRowTree(tr: HTMLTableRowElement, index: number): void;
    renderHeaderRowTreeCell(tr: HTMLTableRowElement, rIndex: number, column: ColumnModel, th: HTMLTableCellElement): void;
    createExpanderLine(direction: string): HTMLDivElement;
    renderHeaderRowLabels(tr: HTMLTableRowElement, rIndex: number, hIndex: number): void;
    renderHeaderRowLabelCell(th: TableHeaderCell, column: ColumnModel, rIndex: number, hIndex: number): void;
    renderHeaderRowFilters(tr: HTMLTableRowElement, index: number): void;
    renderHeaderRowFilterCell(tr: HTMLTableRowElement, rIndex: number, column: ColumnModel, th: TableHeaderCell): void;
    renderHeaderRowCornerCell(th: TableCell): void;
    cellRenderSchedules: WeakMap<TableCell, number>;
    renderBody(): void;
    scheduleRenderBodyCell(cellModel: CellModel, cell: TableCell): void;
    fixCellBorders(cell: TableCell, style: Style): void;
    renderBodyCell(cellModel: CellModel, cell?: TableCell): void;
    mergeBodyCells(mergedCells: Merge[]): void;
    renderRowTree(): void;
    renderRowTreeCell(cIndex: number, row: RowModel, th: HTMLTableCellElement): void;
}

declare type TableCell = HTMLTableCellElement & {
    c: number;
    r: number;
};

declare class TableEvent extends Event {
}

declare type TableHeaderCell = TableCell;

declare type TableRenderOptions = {
    vertical?: boolean;
    horizontal?: boolean;
};

declare type TableRow = HTMLTableRowElement & {
    r: number;
    expander: Expander;
};

declare type TableTheme = {
    /** theme name */
    name: string;
    /** styles for cells */
    cells?: ThemeItem[];
    /** styles for columns */
    columns?: ThemeAxisItem[];
    /** styles for rows */
    rows?: ThemeAxisItem[];
};

declare type TabOptions = {
    color?: string;
    hidden?: boolean;
};

declare class Tabs extends LitElement {
    static styles: CSSResult[];
    static dragParent: Tabs;
    static dragIndex: number;
    static dragTarget: Tabs;
    static dropIndex: number;
    topLevelComponent: HTMLElement;
    items: TabItem[];
    closable: boolean;
    addButton: boolean;
    selectedIndex: number;
    overlay: HTMLDivElement;
    tabs: HTMLDivElement[];
    actions: actions.Action[];
    position: VerticalPosition;
    empty: HTMLDivElement;
    parentContainer: TabContainer;
    menuRef: Ref<Menu>;
    get menu(): Menu;
    private _contextMenuTabIndex;
    private _contextMenuItems;
    get selectedItem(): TabItem;
    get container(): TabContainer;
    updated(): void;
    positionOverlay(target?: HTMLElement): HTMLElement;
    hideOverlay: () => HTMLElement;
    selectTab(index: number, dispatchEvent?: boolean): void;
    getIndexById(id: ComponentId): number;
    selectTabById(id: ComponentId, dispatchEvent?: boolean): void;
    addTab(item: TabItem, index?: number): void;
    removeTab(index: number, dispatchEvent?: boolean): TabItem;
    _onDragover(e: DragEvent, index: number): void;
    _onDragStart(_e: DragEvent, index: number): void;
    _onDragStop(): void;
    _onDrop(): void;
    moveTab(fromIndex: number, toIndex: number, dispatchEvent?: boolean): void;
    _onMenuItemSelect(e: ListSelectEvent): void;
    _onCrossClick(e: MouseEvent, index: number): void;
    _onContextMenu(e: MouseEvent, index: number): void;
    _onActionClick(action: actions.Action): void;
    disconnectedCallback(): void;
    _onContainerDragover(e: DragEvent): void;
    render: () => TemplateResult<1>;
}

export declare namespace tabs {
    export {
        TabSplitContainerItem,
        TabSplitContainerSource,
        TabSplitContainerModel,
        TabEvent,
        Tabs,
        TabsActionArgs,
        TabContainer,
        TabSplitContainer,
        TabItem
    }
}

declare type TabsActionArgs = {
    index: number;
};

declare class TabSplitContainer extends LitElement implements Layout {
    static styles: CSSResult;
    topLevelComponent: HTMLElement;
    model: TabSplitContainerModel;
    addButton: boolean;
    closable: boolean;
    singleActive: boolean;
    tabPosition: VerticalPosition;
    createComponent: ComponentFactory;
    splitContainer: SplitContainer;
    tabContainers: Set<TabSplitContainer | TabSplitContainerTabContainer>;
    private _activeTabContainer;
    get activeTabContainer(): TabContainer;
    private _activeTab;
    get activeTab(): TabItem;
    private loadState;
    walk(cb: (splitContainer: TabSplitContainer, tabContainer: TabSplitContainerTabContainer) => boolean | void): void;
    willUpdate(): void;
    updateTabs(): void;
    updateTab(id: ComponentId, tab: Partial<TabItem>): void;
    removeEmptyContainers(): Promise<void>;
    updateActiveTab(): void;
    _createTabContainer: (containerIndex: number) => TabSplitContainerTabContainer;
    _createSplitContainer: (containerIndex: number) => TabSplitContainer;
    _createSplitContainerComponent: (id: ComponentId) => Promise<TabContainer | TabSplitContainer>;
    _onDrop: (e: DragEvent) => void;
    activate(id: ComponentId): void;
    open(item: TabItem, containerIndex?: number): void;
    render: () => "" | TemplateResult<1>;
    layout(): void;
}

declare type TabSplitContainerItem = SplitContainerItem & {
    tabs?: TabItem[];
    selectedIndex?: number;
    container?: Partial<TabSplitContainerModel>;
    parentContainer?: TabSplitContainerModel;
};

declare class TabSplitContainerModel {
    orientation: Orientation;
    items: TabSplitContainerItem[];
    parentItem?: TabSplitContainerItem;
    constructor(sourceData?: TabSplitContainerSource);
    clean(): boolean;
    populate(sourceData: TabSplitContainerSource): void;
    updateTab(id: string, tab: Partial<TabItem>): void;
    addTab(tab: TabItem, after?: ComponentId): void;
    removeTab(id: string): void;
    walk(cb: (m: TabItem, container: TabSplitContainerModel) => void | boolean, container?: TabSplitContainerModel): boolean;
    getSourceData(): TabSplitContainerSource;
}

declare type TabSplitContainerSource = {
    orientation?: Orientation;
    items?: TabSplitContainerItem[];
};

declare type TabSplitContainerTabContainer = TabContainer & {
    index: number;
    parentContainer: TabSplitContainer;
};

declare function tan(x: number): number;

declare function tanh(x: number): number;

declare function text(v: unknown, format?: string): string;

declare namespace textFunctions {
    export {
        text,
        left,
        right,
        mid,
        concat
    }
}

declare function TextRenderer(div: HTMLDivElement, cell: CellModel): HTMLDivElement;

declare interface TextStyle {
    /** Bold text style */
    bold?: boolean;
    /** Italic text style */
    italic?: boolean;
    /** Underline text style */
    underline?: boolean;
    /** Font Size */
    sz?: number;
    /** Strike-through text style */
    strike?: boolean;
    /** Font Name */
    font?: string;
    /** Text Color */
    color?: Color_2;
}

declare type Theme = {
    name: string;
    type: ThemeType;
    definition: ThemeDefinition;
    accentColor?: string;
};

declare const themeable: (theme: Theme) => <T extends AnyConstructor<LitElement>>(superClass: T) => AnyConstructor<LitElement> & T;

declare type ThemeAxisItem = ThemeItem & {
    /** style will apply on cells with specific row/column index */
    index?: number;
    /** style will apply on cells with specific row/column level */
    level?: number;
    /** style will apply on cells their names are matching regular expression */
    name?: string | RegExp;
};

declare class ThemeChangeEvent extends Event {
    readonly theme: Theme;
    constructor(type: string, theme: Theme);
}

declare type ThemeDefinition = Record<string, string>;

declare type ThemeItem = Omit<ConditionalFormatItemSource, 'ranges'>;

declare class ThemeManager extends EventTarget {
    private elm;
    readonly themes: Map<string, Theme>;
    private _activeTheme;
    get activeTheme(): Theme;
    constructor(elm?: HTMLElement);
    registerTheme(theme: Theme): void;
    activate(name: string): void;
}

declare type ThemeType = 'light' | 'dark';

declare type ThemeVariables = Map<string, string>;

declare function today(): number;

declare type Token = [string, TokenType];

declare type TokenizationOptions = {
    decimalPoint: string;
    stringQuote: string;
    sheetQuote: string;
    argumentSeparator: string;
};

declare class Tokenizer {
    readonly options: TokenizationOptions;
    constructor(options?: Partial<TokenizationOptions>);
    tokenize(formula: string): Token[];
}

declare enum TokenType {
    Number = 0,
    Boolean = 1,
    String = 2,
    StringQuote = 3,
    Function = 4,
    ArgumentSeparator = 5,
    OpenBracket = 6,
    CloseBracket = 7,
    Operator = 8,
    Cell = 9,
    Variable = 10,
    Range = 11,
    Sheet = 12,
    SheetQuote = 13,
    SheetSeparator = 14,
    Unknown = 15,
    Operand = 16
}

declare class Toolbar extends LitElement implements Layout {
    static styles: CSSResult[];
    items: ToolbarItem[];
    values: Record<string, unknown>;
    readonly controls: Map<string, HTMLElement>;
    tooltipRef: Ref<Tooltip>;
    get tooltip(): Tooltip;
    _tooltipTimeout: number;
    constructor();
    layout(): void;
    _onItemMouseEnter: (e: MouseEvent) => void;
    _onItemMouseLeave: () => void;
    updated(): void;
    render: () => TemplateResult<1>;
}

export declare namespace toolbar_2 {
    export {
        Toolbar,
        ToolbarButton,
        ToolbarDropdown,
        ToolbarDropdownButton,
        ToolbarGrid,
        ToolbarText,
        ToolbarColorPicker,
        ToolbarItemType,
        ToolbarItem
    }
}

declare class ToolbarButton extends Button {
    static styles: CSSResult[];
    item: ToolbarItem;
    constructor();
    firstUpdated(): void;
    willUpdate(changedProps: Map<PropertyKey, undefined>): void;
}

declare class ToolbarColorPicker extends LitElement {
    static styles: CSSResult[];
    item: ToolbarItem;
    value: string;
    dropdown: Dropdown;
    btnContent: HTMLDivElement;
    _onSelect: (e: ColorPickerEvent) => void;
    _onPreview: (e: ColorPickerEvent) => void;
    _onPreviewEnd: (e: ColorPickerEvent) => void;
    render: () => TemplateResult<1>;
}

declare class ToolbarDropdown extends LitElement {
    static styles: CSSResult[];
    tree: TreeDropdown;
    item: ToolbarItem;
    value: string;
    updated(): void;
    _onChange: () => void;
    render: () => TemplateResult<1>;
}

declare class ToolbarDropdownButton extends LitElement {
    static styles: CSSResult[];
    gridRef: Ref_2<ToolbarGrid>;
    get grid(): ToolbarGrid;
    dropdownRef: Ref_2<Dropdown>;
    get dropdown(): Dropdown;
    button: ToolbarButton;
    item: ToolbarItem;
    currentItem: ToolbarItem;
    mode: 'dropdown' | 'button';
    willUpdate(): void;
    firstUpdated(): void;
    render: () => TemplateResult<1>;
}

declare class ToolbarGrid extends LitElement {
    static styles: CSSResult[];
    items: ToolbarItem[][];
    render: () => TemplateResult<1>;
}

declare type ToolbarItem = {
    type: ToolbarItemType;
    id: string;
    title?: string;
    value?: unknown;
    tooltip?: string;
    color?: ColorTypes;
    icon?: IconSpec;
    width?: number;
    text?: string;
    caption?: string;
    content?: TemplateResult_2<1>;
    items?: ToolbarItem[][] | NodeSource[];
    colspan?: number;
    default?: boolean;
    placeholder?: string;
    disabled?: boolean;
    hidden?: boolean;
    gap?: number;
    options?: Record<string, unknown>;
};

declare type ToolbarItemType = 'divider' | 'button' | 'togglebutton' | 'dropdown' | 'dropdown-button' | 'color' | 'text' | 'label';

declare class ToolbarText extends LitElement {
    static styles: CSSResult[];
    color: string;
    item: ToolbarItem;
    value: string;
    input: HTMLInputElement;
    dropdownRef: Ref_2<Dropdown>;
    get dropdown(): Dropdown;
    listRef: Ref_2<List>;
    get list(): List;
    updated(): void;
    _onSelect: (e: ListSelectEvent) => void;
    _onKeyUp: () => void;
    render: () => TemplateResult<1>;
}

declare class Tooltip extends LitElement {
    static styles: CSSResult[][];
    color: ColorTypes;
    arrow: boolean;
    position: string;
    content: string | TemplateResult<1>;
    triangle: HTMLDivElement;
    private _attachedTo;
    private _mouseEventListener;
    get attachedTo(): HTMLElement | "cursor";
    hide: () => HTMLElement;
    show: () => HTMLElement;
    destroy(): void;
    render: () => TemplateResult<1>;
    deatach(): void;
    attachToElement(elm: HTMLElement, position?: TooltipPosition): void;
    get parent(): HTMLElement;
    attachToCursor(): void;
    attachTo(elm: HTMLElement | 'cursor', position?: TooltipPosition): Promise<void>;
}

declare type TooltipPosition = 'top' | 'right' | 'bottom' | 'left' | 'mouse';

declare type TopItem = {
    id: ComponentId;
};

declare type TopSettings = {
    rightItems: TopItem[];
};

declare function transpose<T>(m: Matrix<T>): Matrix<T>;

declare class Tree extends LitElement {
    static styles: CSSResult[];
    model: TreeModel;
    adapter: TreeAdapter;
    options: Options_2;
    selection: TreeSelectionModel;
    logger: log.Logger;
    maxHeight: number;
    itemHeight: number;
    value: SerializedValue[];
    disableAutoload: boolean;
    list: List;
    searchBar: Search;
    globalTreeLevels: Levels;
    loading: boolean;
    noMatches: boolean;
    filtering: FilterModel;
    awaitFilter: string;
    get size(): number;
    get hasGlobalLevels(): boolean;
    _lastDragItem: HTMLElement;
    _onDragover: (e: DragEvent) => void;
    _onDrop: (e: DragEvent) => void;
    _onDragLeave: () => void;
    constructor();
    destroy(): void;
    connectedCallback(): void;
    setSourceData(sourceData: TreeSource, options?: Partial<Options_2>): void;
    setValue(values: SerializedValue[]): void;
    loadData(params?: TreeAdapterParams): Promise<void>;
    loadMore(parent: NodeModel): Promise<void>;
    keyActions: {
        ArrowRight: () => void;
        ArrowLeft: () => void;
    };
    willUpdate(props: Map<PropertyKey, unknown>): void;
    updated(changedProps: Map<PropertyKey, unknown>): void;
    firstUpdated(): Promise<void>;
    _onGlobalLevelSelect: (e: LevelSelectEvent) => Promise<void>;
    _onSearch: () => void;
    toggleNode(node: NodeModel, level: number, dispatchEvent?: boolean): void;
    updateNodeLoadState(node: NodeModel, newNodeCount: number): void;
    toggleNodeCollapse(node: NodeModel, dispatchEvent?: boolean): Promise<void>;
    toggleTreeCollapse(node?: NodeModel, dispatchEvent?: boolean): void;
    _onListRender: () => void;
    _onListMenu: (e: ListPointerEvent) => void;
    get itemStyle(): (string | CSSResultOrNative)[];
    render(): Iterable<string | TemplateResult<1>>;
    renderItems(all?: boolean): void;
    clearSelection(): void;
    filter(term?: string): Promise<void>;
    clearFilter(): Promise<void>;
}

export declare namespace tree {
    export {
        Options_2 as TreeOptions,
        TreeDropdown,
        LevelSelectEvent,
        TreeSearchEvent,
        TreeEvent,
        TreePointerEvent,
        TreeDropEvent,
        Tree,
        TreeMenu,
        NodeSource,
        NodeModel,
        normalizeSerializedValues,
        NodeSelectionStatus,
        SerializedValue,
        ItemMetadata,
        SelectedItemParams,
        TreeSelectionModel,
        TreeAdapter,
        TreeSource,
        TreeModel,
        DateTreeAdapterPeriodOptions,
        DateTreeAdapterOptions,
        PeriodType,
        DateTreeAdapter,
        SelectMode,
        ItemPropertyType,
        ItemProperty,
        ItemTypeOptions,
        FolderOptions,
        TreeAdapterParams,
        NodePlaceholder,
        TreeNodeRenderer
    }
}

export declare namespace tree_2 {
    export {
        TreeNodeMixin,
        buildLevelBasedTree,
        buildParentBasedTree,
        buildTree,
        FilterState,
        TreeNodeSource,
        Constructor,
        TreeNodeType,
        LevelBasedTreeCreateOptions
    }
}

declare abstract class TreeAdapter extends ComponentAdapter<Tree> {
    abstract getTree(params?: TreeAdapterParams): TreeSource | Promise<TreeSource>;
    getOptions(): Partial<Options_2> | Promise<Partial<Options_2>>;
}

declare type TreeAdapterParams = {
    parent?: NodeModel;
    parentKey?: string;
    offset?: number;
    filter?: string;
};

declare class TreeDropdown extends Dropdown {
    static styles: CSSResult[];
    options: Options_2;
    model: TreeModel;
    adapter: TreeAdapter;
    selection: TreeSelectionModel;
    maxHeight: number;
    maxWidth: number;
    value: SerializedValue[];
    cross: boolean;
    caption: string;
    placeholder: string;
    buttonInput: boolean;
    preventInputEnter: boolean;
    dynamicWidth: boolean;
    selectedItems: Map<string, SelectedItemParams>;
    button: Button;
    input: Input;
    contentDiv: HTMLDivElement;
    searchTerm: string;
    _tree: Tree;
    _renderDropdown: boolean;
    _firstOpen: boolean;
    _onTreeRender: () => void;
    get hasCrossButton(): boolean;
    get tree(): Tree;
    tooltip: Tooltip;
    _onChange(e: TreeEvent): void;
    open(): Promise<void>;
    willUpdate(changedProps: Map<PropertyKey, unknown>): Promise<void>;
    filter(term: string): Promise<void>;
    clearFilter(): Promise<void>;
    focus(): void;
    constructor();
    connectedCallback(): void;
    setSourceData(sourceData: TreeSource, options?: Partial<Options_2>): void;
    updateOptions(options: Partial<Options_2>): void;
    adjustWidth(): void;
    clearSelection(dispatchEvent?: boolean): Promise<void>;
    _onMouseOver: () => void;
    _onMouseOut: () => void;
    getSelectionItems(): [NodeModel, [number, boolean][], boolean][];
    getButtonContentHtml(): TemplateResult<1>;
    getSelectionText(): string;
    _debounceFilter: {
        (this: unknown, ...args: [term: string] & any[]): Promise<Promise<void>>;
        cancel: (reason?: any) => void;
    };
    _onInput: (e: InputEvent) => Promise<void>;
    _onInputKeyDown: (e: KeyboardEvent) => void;
    _onInputBlur: () => string;
    render: () => TemplateResult<1>;
}

declare class TreeDropEvent extends DragEvent {
    tree: Tree;
    node: NodeModel;
    constructor(type: string, e: DragEvent, args?: Partial<TreeDropEvent>);
}

declare class TreeEvent extends Event {
    component: Tree;
    node: NodeModel;
    constructor(type: string, args?: Partial<TreeEvent>);
}

declare class TreeMenu extends Tree {
    static styles: CSSResult[];
    private _autoHide;
    constructor();
    connectedCallback(): void;
    firstUpdated(): Promise<void>;
    updateWidth(): Promise<void>;
    _hideEvent: () => void;
    open(elm: HTMLElement, position?: MenuPosition): Promise<void>;
    openAt(x: number, y: number): Promise<void>;
}

declare class TreeModel {
    options: Options_2;
    readonly nodeMap: Map<string, NodeModel>;
    private _root;
    private _nodes;
    private _visibleNodes;
    private _maxLevel;
    get maxLevel(): number;
    get root(): NodeModel;
    get nodes(): NodeModel[];
    get visibleNodes(): (NodeModel | NodePlaceholder)[];
    getNodeByViewIndex(index: number): NodeModel | NodePlaceholder;
    constructor(source: TreeSource, options: Options_2);
    populate(source: TreeSource): void;
    insertNodes(index: number, nodes: number | NodeModel[]): NodeModel[];
    deleteNodes(index: number, count: number): NodeModel[];
    calculateNodeLevels(node: NodeModel): void;
    indexNodes(calculateSubLevels?: boolean): void;
    indexNodesByTree(calculateSubLevels?: boolean): void;
    indexVisibleNodes(): void;
    getSourceData(): NodeSource[];
}

declare function TreeNodeMixin<TBase extends Constructor>(Base?: TBase): {
    new (...input: any[]): {
        index: number;
        parentIndex: number;
        level: number;
        _children: any[];
        _count: number;
        _parent: any;
        _collapsed: boolean;
        _hidden: boolean;
        _filterState: FilterState;
        _filterable: boolean;
        _sortable: boolean;
        populate(source: TreeNodeSource): void;
        getSourceData(): TreeNodeSource;
        readonly filterable: boolean;
        readonly sortable: boolean;
        filterState: FilterState;
        hidden: boolean;
        readonly visible: boolean;
        collapsed: boolean;
        parent: any;
        children: any[];
        readonly hasChildren: boolean;
        count: number;
        readonly isLoaded: boolean;
        readonly isPartialyLoaded: boolean;
        readonly hasParent: boolean;
        readonly firstChild: any;
        readonly lastChild: any;
        addChild(child: any): void;
        insertChildren(children: any[], index: number): void;
        deleteChildren(index: number | any[], count?: number): void;
        expand(unhide?: boolean): void;
        collapse(): void;
        toggleCollapse(recursive?: boolean, unhide?: boolean): void;
        clearChildren(): void;
        walk(cb: (m: any) => unknown | void): void;
        walkVisible(cb: (m: any) => unknown | void): void;
        walkUp(cb: (m: any) => unknown | void): void;
        _sort(comparer: (a: any, b: any) => number): void;
        sort(comparer: (a: any, b: any) => number): void;
    };
} & TBase;

declare type TreeNodeRenderer = (div: HTMLDivElement, node: NodeModel) => string | TemplateResult_2<1> | void;

/** Source object type for tree node */
declare type TreeNodeSource = {
    /** node index (readonly) */
    i?: number;
    /** node level */
    l?: number;
    /** node level */
    level?: number;
    /** parent index */
    p?: number;
    /** children count */
    count?: number;
    /** initital collapse state */
    collapsed?: boolean;
    /** node visibility */
    hidden?: boolean;
    /** false for excluding node from sorting, default = true */
    sortable?: boolean;
    /** false for excluding node from filtering, default = true */
    filterable?: boolean;
};

declare type TreeNodeType = Mixin<typeof TreeNodeMixin>;

declare type TreeOptions = {
    enabled?: boolean;
    reversed?: boolean;
};

declare class TreePointerEvent extends PointerEvent {
    tree: Tree;
    node: NodeModel;
    constructor(type: string, e: PointerEvent, args?: Partial<TreePointerEvent>);
}

declare class TreeSearchEvent extends Event {
    readonly component: Search;
    constructor(type: string, component: Search);
}

declare class TreeSelectionModel {
    options: Options_2;
    readonly items: Map<string, SelectedItemParams>;
    get count(): number;
    constructor(options: Options_2, sourceData?: SerializedValue[]);
    ensureItem(key: string, value?: string): SelectedItemParams;
    setItems(items: SerializedValue[]): void;
    populate(sourceData: SerializedValue[]): void;
    serialize(): SerializedValue[];
    clear(): void;
    validateChange(node: NodeModel, level: number, value: boolean): boolean;
    toggle(node: NodeModel, level: number): this;
    select(node: NodeModel, level: number, value?: boolean | null): this;
    deselect(node: NodeModel, level: number): this;
    clearItemSelection(node: NodeModel): void;
    getLevelSelection(node: NodeModel): Map<number, boolean>;
    getValue(node: NodeModel, level: number, defaultValue?: boolean): boolean;
    isSelectedByParent(node: NodeModel): boolean;
    getSelectionStatus(node: NodeModel): NodeSelectionStatus;
    toggleChildNodes(node: NodeModel, level: number): void;
}

declare type TreeSource = NodeSource[];

declare function trim(value: string, char: string): string;

declare function _true(): boolean;

declare type UIValueFormat = string;

/**
 * General = 'g',
 * Text = 't',
 * Number = 'n',
 * Date = 'd',
 * DateTime = 'dt',
 * Time = 'tm',
 * Checkbox = 'b',
 * Select = 's',
 * MultiSelect = 'm',
 */
declare type UIValueType = 'g' | 't' | 'n' | 'd' | 'dt' | 'tm' | 'b' | 's' | 'm';

declare type User = {
    id: string;
    name?: string;
};

export declare namespace utils {
    export {
        isBool,
        isObject,
        isFunction,
        isString,
        isNumericString,
        strToNum,
        isNumber,
        isCharLetter,
        ifNull,
        mergeDeep,
        cloneDeep,
        clone,
        trim,
        minmax,
        minmax2d,
        removeAccents,
        isControlCharacter,
        escapeRegExp,
        intersect
    }
}

export declare namespace utils_2 {
    export {
        isSheetNameValid,
        sanitizeSheetName,
        SHEET_NAME_REGEX
    }
}

declare type Value = number | string | boolean | null;

declare type ValueFormatter<T = unknown> = (value: T) => string;

declare type VerticalAlignment = 'top' | 'bottom' | 'center';

declare type VerticalPosition = 'top' | 'bottom' | 'center';

declare type ViewMode = 'grid' | 'singleObject';

declare type Viewport = {
    rows: RowModel[];
    columns: ColumnModel[];
};

declare function vlookup(lookupValue: string, lookupTable: Matrix<string>, colIndex: number, exactMatch?: boolean): string;

declare function weekday(sn: DateArg, returnType?: number): number;

declare function workday(sn: number, count: number, holidays?: number[]): number;

declare function workday_2(sn: Arg<DateArg>, count: number, _holidays?: number[]): number;

declare class XlsxEditorPlugin extends Plugin_2<Editor> {
    static pluginName: string;
    init(editor: Editor): void;
}

declare function xor(...args: ArrayArg): boolean;

declare function year(sn: DateArg): number;

declare function zoomElement(elm: HTMLElement, zoom: number): void;

export { }
