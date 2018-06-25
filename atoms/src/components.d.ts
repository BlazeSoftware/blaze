/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface BlazeAccordionPane {
      'close': () => void;
      'header': string;
      'isOpen': () => boolean;
      'open': boolean;
      'show': () => void;
    }
  }

  interface HTMLBlazeAccordionPaneElement extends StencilComponents.BlazeAccordionPane, HTMLStencilElement {}

  var HTMLBlazeAccordionPaneElement: {
    prototype: HTMLBlazeAccordionPaneElement;
    new (): HTMLBlazeAccordionPaneElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-accordion-pane': HTMLBlazeAccordionPaneElement;
  }
  interface ElementTagNameMap {
    'blaze-accordion-pane': HTMLBlazeAccordionPaneElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-accordion-pane': JSXElements.BlazeAccordionPaneAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAccordionPaneAttributes extends HTMLAttributes {
      'header'?: string;
      'open'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAccordion {

    }
  }

  interface HTMLBlazeAccordionElement extends StencilComponents.BlazeAccordion, HTMLStencilElement {}

  var HTMLBlazeAccordionElement: {
    prototype: HTMLBlazeAccordionElement;
    new (): HTMLBlazeAccordionElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-accordion': HTMLBlazeAccordionElement;
  }
  interface ElementTagNameMap {
    'blaze-accordion': HTMLBlazeAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-accordion': JSXElements.BlazeAccordionAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAccordionAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAddressHeading {

    }
  }

  interface HTMLBlazeAddressHeadingElement extends StencilComponents.BlazeAddressHeading, HTMLStencilElement {}

  var HTMLBlazeAddressHeadingElement: {
    prototype: HTMLBlazeAddressHeadingElement;
    new (): HTMLBlazeAddressHeadingElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-address-heading': HTMLBlazeAddressHeadingElement;
  }
  interface ElementTagNameMap {
    'blaze-address-heading': HTMLBlazeAddressHeadingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-address-heading': JSXElements.BlazeAddressHeadingAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAddressHeadingAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAddress {

    }
  }

  interface HTMLBlazeAddressElement extends StencilComponents.BlazeAddress, HTMLStencilElement {}

  var HTMLBlazeAddressElement: {
    prototype: HTMLBlazeAddressElement;
    new (): HTMLBlazeAddressElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-address': HTMLBlazeAddressElement;
  }
  interface ElementTagNameMap {
    'blaze-address': HTMLBlazeAddressElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-address': JSXElements.BlazeAddressAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAddressAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAlert {
      'close': () => void;
      'dismissible': boolean;
      'isOpen': () => boolean;
      'open': boolean;
      'show': () => void;
      'type': string;
    }
  }

  interface HTMLBlazeAlertElement extends StencilComponents.BlazeAlert, HTMLStencilElement {}

  var HTMLBlazeAlertElement: {
    prototype: HTMLBlazeAlertElement;
    new (): HTMLBlazeAlertElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-alert': HTMLBlazeAlertElement;
  }
  interface ElementTagNameMap {
    'blaze-alert': HTMLBlazeAlertElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-alert': JSXElements.BlazeAlertAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAlertAttributes extends HTMLAttributes {
      'dismissible'?: boolean;
      'open'?: boolean;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAlerts {
      'position': string;
    }
  }

  interface HTMLBlazeAlertsElement extends StencilComponents.BlazeAlerts, HTMLStencilElement {}

  var HTMLBlazeAlertsElement: {
    prototype: HTMLBlazeAlertsElement;
    new (): HTMLBlazeAlertsElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-alerts': HTMLBlazeAlertsElement;
  }
  interface ElementTagNameMap {
    'blaze-alerts': HTMLBlazeAlertsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-alerts': JSXElements.BlazeAlertsAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAlertsAttributes extends HTMLAttributes {
      'position'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeAvatar {
      'alt': string;
      'alt2': string;
      'size': string;
      'src': string;
      'src2': string;
      'text': string;
    }
  }

  interface HTMLBlazeAvatarElement extends StencilComponents.BlazeAvatar, HTMLStencilElement {}

  var HTMLBlazeAvatarElement: {
    prototype: HTMLBlazeAvatarElement;
    new (): HTMLBlazeAvatarElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-avatar': HTMLBlazeAvatarElement;
  }
  interface ElementTagNameMap {
    'blaze-avatar': HTMLBlazeAvatarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-avatar': JSXElements.BlazeAvatarAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeAvatarAttributes extends HTMLAttributes {
      'alt'?: string;
      'alt2'?: string;
      'size'?: string;
      'src'?: string;
      'src2'?: string;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeBadge {
      'ghost': boolean;
      'rounded': boolean;
      'type': string;
    }
  }

  interface HTMLBlazeBadgeElement extends StencilComponents.BlazeBadge, HTMLStencilElement {}

  var HTMLBlazeBadgeElement: {
    prototype: HTMLBlazeBadgeElement;
    new (): HTMLBlazeBadgeElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-badge': HTMLBlazeBadgeElement;
  }
  interface ElementTagNameMap {
    'blaze-badge': HTMLBlazeBadgeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-badge': JSXElements.BlazeBadgeAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeBadgeAttributes extends HTMLAttributes {
      'ghost'?: boolean;
      'rounded'?: boolean;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeBreadcrumb {
      'href': string;
    }
  }

  interface HTMLBlazeBreadcrumbElement extends StencilComponents.BlazeBreadcrumb, HTMLStencilElement {}

  var HTMLBlazeBreadcrumbElement: {
    prototype: HTMLBlazeBreadcrumbElement;
    new (): HTMLBlazeBreadcrumbElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-breadcrumb': HTMLBlazeBreadcrumbElement;
  }
  interface ElementTagNameMap {
    'blaze-breadcrumb': HTMLBlazeBreadcrumbElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-breadcrumb': JSXElements.BlazeBreadcrumbAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeBreadcrumbAttributes extends HTMLAttributes {
      'href'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeBreadcrumbs {

    }
  }

  interface HTMLBlazeBreadcrumbsElement extends StencilComponents.BlazeBreadcrumbs, HTMLStencilElement {}

  var HTMLBlazeBreadcrumbsElement: {
    prototype: HTMLBlazeBreadcrumbsElement;
    new (): HTMLBlazeBreadcrumbsElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-breadcrumbs': HTMLBlazeBreadcrumbsElement;
  }
  interface ElementTagNameMap {
    'blaze-breadcrumbs': HTMLBlazeBreadcrumbsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-breadcrumbs': JSXElements.BlazeBreadcrumbsAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeBreadcrumbsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeCardBody {

    }
  }

  interface HTMLBlazeCardBodyElement extends StencilComponents.BlazeCardBody, HTMLStencilElement {}

  var HTMLBlazeCardBodyElement: {
    prototype: HTMLBlazeCardBodyElement;
    new (): HTMLBlazeCardBodyElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-card-body': HTMLBlazeCardBodyElement;
  }
  interface ElementTagNameMap {
    'blaze-card-body': HTMLBlazeCardBodyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-card-body': JSXElements.BlazeCardBodyAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeCardBodyAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeCardFooter {

    }
  }

  interface HTMLBlazeCardFooterElement extends StencilComponents.BlazeCardFooter, HTMLStencilElement {}

  var HTMLBlazeCardFooterElement: {
    prototype: HTMLBlazeCardFooterElement;
    new (): HTMLBlazeCardFooterElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-card-footer': HTMLBlazeCardFooterElement;
  }
  interface ElementTagNameMap {
    'blaze-card-footer': HTMLBlazeCardFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-card-footer': JSXElements.BlazeCardFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeCardFooterAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeCardHeader {

    }
  }

  interface HTMLBlazeCardHeaderElement extends StencilComponents.BlazeCardHeader, HTMLStencilElement {}

  var HTMLBlazeCardHeaderElement: {
    prototype: HTMLBlazeCardHeaderElement;
    new (): HTMLBlazeCardHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-card-header': HTMLBlazeCardHeaderElement;
  }
  interface ElementTagNameMap {
    'blaze-card-header': HTMLBlazeCardHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-card-header': JSXElements.BlazeCardHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeCardHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeCard {

    }
  }

  interface HTMLBlazeCardElement extends StencilComponents.BlazeCard, HTMLStencilElement {}

  var HTMLBlazeCardElement: {
    prototype: HTMLBlazeCardElement;
    new (): HTMLBlazeCardElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-card': HTMLBlazeCardElement;
  }
  interface ElementTagNameMap {
    'blaze-card': HTMLBlazeCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-card': JSXElements.BlazeCardAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeCardAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeDemo {
      'classes': string;
      'code': string;
      'demo': boolean;
      'language': string;
    }
  }

  interface HTMLBlazeDemoElement extends StencilComponents.BlazeDemo, HTMLStencilElement {}

  var HTMLBlazeDemoElement: {
    prototype: HTMLBlazeDemoElement;
    new (): HTMLBlazeDemoElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-demo': HTMLBlazeDemoElement;
  }
  interface ElementTagNameMap {
    'blaze-demo': HTMLBlazeDemoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-demo': JSXElements.BlazeDemoAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeDemoAttributes extends HTMLAttributes {
      'classes'?: string;
      'code'?: string;
      'demo'?: boolean;
      'language'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeDrawer {
      'close': () => void;
      'dismissible': boolean;
      'isOpen': () => boolean;
      'open': boolean;
      'position': string;
      'show': () => void;
    }
  }

  interface HTMLBlazeDrawerElement extends StencilComponents.BlazeDrawer, HTMLStencilElement {}

  var HTMLBlazeDrawerElement: {
    prototype: HTMLBlazeDrawerElement;
    new (): HTMLBlazeDrawerElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-drawer': HTMLBlazeDrawerElement;
  }
  interface ElementTagNameMap {
    'blaze-drawer': HTMLBlazeDrawerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-drawer': JSXElements.BlazeDrawerAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeDrawerAttributes extends HTMLAttributes {
      'dismissible'?: boolean;
      'open'?: boolean;
      'position'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeImage {
      'alt': string;
      'collection': string;
      'filter': string;
      'height': number;
      'likes': boolean;
      'photo': string;
      'src': string;
      'user': string;
      'width': number;
    }
  }

  interface HTMLBlazeImageElement extends StencilComponents.BlazeImage, HTMLStencilElement {}

  var HTMLBlazeImageElement: {
    prototype: HTMLBlazeImageElement;
    new (): HTMLBlazeImageElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-image': HTMLBlazeImageElement;
  }
  interface ElementTagNameMap {
    'blaze-image': HTMLBlazeImageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-image': JSXElements.BlazeImageAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeImageAttributes extends HTMLAttributes {
      'alt'?: string;
      'collection'?: string;
      'filter'?: string;
      'height'?: number;
      'likes'?: boolean;
      'photo'?: string;
      'src'?: string;
      'user'?: string;
      'width'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeModal {
      'close': () => void;
      'dismissible': boolean;
      'full': boolean;
      'ghost': boolean;
      'isOpen': () => boolean;
      'open': boolean;
      'show': () => void;
    }
  }

  interface HTMLBlazeModalElement extends StencilComponents.BlazeModal, HTMLStencilElement {}

  var HTMLBlazeModalElement: {
    prototype: HTMLBlazeModalElement;
    new (): HTMLBlazeModalElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-modal': HTMLBlazeModalElement;
  }
  interface ElementTagNameMap {
    'blaze-modal': HTMLBlazeModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-modal': JSXElements.BlazeModalAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeModalAttributes extends HTMLAttributes {
      'dismissible'?: boolean;
      'full'?: boolean;
      'ghost'?: boolean;
      'open'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeOverlay {
      'open': boolean;
    }
  }

  interface HTMLBlazeOverlayElement extends StencilComponents.BlazeOverlay, HTMLStencilElement {}

  var HTMLBlazeOverlayElement: {
    prototype: HTMLBlazeOverlayElement;
    new (): HTMLBlazeOverlayElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-overlay': HTMLBlazeOverlayElement;
  }
  interface ElementTagNameMap {
    'blaze-overlay': HTMLBlazeOverlayElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-overlay': JSXElements.BlazeOverlayAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeOverlayAttributes extends HTMLAttributes {
      'open'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazePagination {
      'currentPage': () => number;
      'goToPage': (page: number) => void;
      'page': number;
      'pages': number;
    }
  }

  interface HTMLBlazePaginationElement extends StencilComponents.BlazePagination, HTMLStencilElement {}

  var HTMLBlazePaginationElement: {
    prototype: HTMLBlazePaginationElement;
    new (): HTMLBlazePaginationElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-pagination': HTMLBlazePaginationElement;
  }
  interface ElementTagNameMap {
    'blaze-pagination': HTMLBlazePaginationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-pagination': JSXElements.BlazePaginationAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazePaginationAttributes extends HTMLAttributes {
      'onOnPageChange'?: (event: CustomEvent) => void;
      'page'?: number;
      'pages'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazePanel {
      'height': number;
    }
  }

  interface HTMLBlazePanelElement extends StencilComponents.BlazePanel, HTMLStencilElement {}

  var HTMLBlazePanelElement: {
    prototype: HTMLBlazePanelElement;
    new (): HTMLBlazePanelElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-panel': HTMLBlazePanelElement;
  }
  interface ElementTagNameMap {
    'blaze-panel': HTMLBlazePanelElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-panel': JSXElements.BlazePanelAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazePanelAttributes extends HTMLAttributes {
      'height'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeProgressBar {
      'max': number;
      'min': number;
      'type': string;
      'value': number;
    }
  }

  interface HTMLBlazeProgressBarElement extends StencilComponents.BlazeProgressBar, HTMLStencilElement {}

  var HTMLBlazeProgressBarElement: {
    prototype: HTMLBlazeProgressBarElement;
    new (): HTMLBlazeProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-progress-bar': HTMLBlazeProgressBarElement;
  }
  interface ElementTagNameMap {
    'blaze-progress-bar': HTMLBlazeProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-progress-bar': JSXElements.BlazeProgressBarAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeProgressBarAttributes extends HTMLAttributes {
      'max'?: number;
      'min'?: number;
      'type'?: string;
      'value'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeProgress {
      'rounded': boolean;
      'size': string;
    }
  }

  interface HTMLBlazeProgressElement extends StencilComponents.BlazeProgress, HTMLStencilElement {}

  var HTMLBlazeProgressElement: {
    prototype: HTMLBlazeProgressElement;
    new (): HTMLBlazeProgressElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-progress': HTMLBlazeProgressElement;
  }
  interface ElementTagNameMap {
    'blaze-progress': HTMLBlazeProgressElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-progress': JSXElements.BlazeProgressAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeProgressAttributes extends HTMLAttributes {
      'rounded'?: boolean;
      'size'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeTab {
      'disabled': boolean;
      'header': string;
      'open': boolean;
      'type': string;
    }
  }

  interface HTMLBlazeTabElement extends StencilComponents.BlazeTab, HTMLStencilElement {}

  var HTMLBlazeTabElement: {
    prototype: HTMLBlazeTabElement;
    new (): HTMLBlazeTabElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-tab': HTMLBlazeTabElement;
  }
  interface ElementTagNameMap {
    'blaze-tab': HTMLBlazeTabElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-tab': JSXElements.BlazeTabAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeTabAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'header'?: string;
      'open'?: boolean;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeTabs {
      'currentTab': () => number;
      'openTab': (tabIndex: number) => void;
    }
  }

  interface HTMLBlazeTabsElement extends StencilComponents.BlazeTabs, HTMLStencilElement {}

  var HTMLBlazeTabsElement: {
    prototype: HTMLBlazeTabsElement;
    new (): HTMLBlazeTabsElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-tabs': HTMLBlazeTabsElement;
  }
  interface ElementTagNameMap {
    'blaze-tabs': HTMLBlazeTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-tabs': JSXElements.BlazeTabsAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeTabsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface BlazeToggle {
      'isToggled': () => boolean;
      'toggled': boolean;
      'type': string;
    }
  }

  interface HTMLBlazeToggleElement extends StencilComponents.BlazeToggle, HTMLStencilElement {}

  var HTMLBlazeToggleElement: {
    prototype: HTMLBlazeToggleElement;
    new (): HTMLBlazeToggleElement;
  };
  interface HTMLElementTagNameMap {
    'blaze-toggle': HTMLBlazeToggleElement;
  }
  interface ElementTagNameMap {
    'blaze-toggle': HTMLBlazeToggleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'blaze-toggle': JSXElements.BlazeToggleAttributes;
    }
  }
  namespace JSXElements {
    export interface BlazeToggleAttributes extends HTMLAttributes {
      'toggled'?: boolean;
      'type'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }