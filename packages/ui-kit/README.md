# UI Kit Component Library

## Component Structure

This document lists all React components found within the `ui-kit` package, including those in nested directories. It also provides descriptions for utility functions.

### Core Components

- **ActionsBar** [↗](./src/ActionsBar/index.tsx)
- **Animation** [↗](./src/Animation/index.tsx)
- **AppHeader** [↗](./src/AppHeader/index.tsx)
- **Autocomplete** [↗](./src/Autocomplete/index.tsx)
  - **AutocompleteButton** [↗](./src/Autocomplete/components/AutocompleteButton/index.tsx)
  - **AutocompleteItem** [↗](./src/Autocomplete/components/AutocompleteItem/index.tsx)
- **Button** [↗](./src/Button/index.tsx)
- **ButtonGroup** [↗](./src/ButtonGroup/index.tsx)
- **Card** [↗](./src/Card/index.tsx)
- **Checkbox** [↗](./src/Checkbox/index.tsx)
- **Details** [↗](./src/Details/index.tsx)
- **Divider** [↗](./src/Divider/index.tsx)
- **Dropdown** [↗](./src/Dropdown/index.tsx)
  - **DropdownItem** [↗](./src/Dropdown/components/DropdownItem/index.tsx)
  - **DropdownItems** [↗](./src/Dropdown/components/DropdownItems/index.tsx)
  - **DropdownPopover** [↗](./src/Dropdown/components/DropdownPopover/index.tsx)
  - **DropdownProviderContainer** [↗](./src/Dropdown/components/DropdownProviderContainer.tsx)
  - **DropdownTrigger** [↗](./src/Dropdown/components/DropdownTrigger/index.tsx)
- **Heading** [↗](./src/Heading/index.tsx)
- **Input** [↗](./src/Input/index.tsx)
- **IsochroneSlider** [↗](./src/IsochroneSlider/index.tsx)
- **LanguageSelect** [↗](./src/LanguageSelect/index.tsx)
- **Legend** [↗](./src/Legend/index.tsx)
- **LineItem** [↗](./src/LineItem/index.tsx)
- **Logo** [↗](./src/Logo/index.tsx)
- **MCDALegend** [↗](./src/MCDALegend/index.tsx)
- **MenuButton** [↗](./src/MenuButton/index.tsx)
  - **Menu** [↗](./src/MenuButton/components/Menu/index.tsx)
  - **MenuItem** [↗](./src/MenuButton/components/MenuItem/index.tsx)
  - **MenuLink** [↗](./src/MenuButton/components/MenuLink/index.tsx)
  - **MenuList** [↗](./src/MenuButton/components/MenuList/index.tsx)
  - **MenuPopover** [↗](./src/MenuButton/components/MenuPopover/index.tsx)
- **Modal** [↗](./src/Modal/index.tsx)
- **ModalDialog** [↗](./src/ModalDialog/index.tsx)
- **Panel** [↗](./src/Panel/index.tsx)
- **Popover** [↗](./src/Popover/index.tsx)
- **Radio** [↗](./src/Radio/index.tsx)
- **Rotator** [↗](./src/Rotator/index.tsx)
- **Select** [↗](./src/Select/index.tsx)
  - **SelectButton** [↗](./src/Select/components/SelectButton/index.tsx)
    - **Placeholder** [↗](./src/Select/components/SelectButton/Placeholder.tsx)
    - **SelectContent** [↗](./src/Select/components/SelectButton/SelectContent.tsx)
  - **SelectItem** [↗](./src/Select/components/SelectItem/index.tsx)
  - **MultiselectChip** [↗](./src/Select/components/MultiselectChip/index.tsx)
  - **MultiselectChipWithSearch** [↗](./src/Select/components/MultiselectChipWithSearch/index.tsx)
- **Selector** [↗](./src/Selector/index.tsx)
- **Slider** [↗](./src/Slider/index.tsx)
- **Tabs** [↗](./src/Tabs/index.tsx)
  - **Tab** [↗](./src/Tabs/components/Tab/index.tsx)
  - **TabList** [↗](./src/Tabs/components/TabList/index.tsx)
  - **TabPanel** [↗](./src/Tabs/components/TabPanel/index.tsx)
- **Text** [↗](./src/Text/index.tsx)
- **Textarea** [↗](./src/Textarea/index.tsx)
- **TimeSlider** [↗](./src/TimeSlider/index.tsx)
- **Timeline** [↗](./src/Timeline/index.tsx)
- **Toggler** [↗](./src/Toggler/index.tsx)
- **Tooltip** [↗](./src/Tooltip/index.tsx)

### Utility Components and Functions

- **component-helpers** [↗](./src/utils/component-helpers)

  - **Polymorphic** [↗](./src/utils/component-helpers/polymorphic.ts)
    - A utility for creating polymorphic components that can render as different HTML elements or other React components.
  - **Descendants** [↗](./src/utils/component-helpers/descendants.tsx)
    - Provides utilities for managing a list of descendant components, enabling features like keyboard navigation and focus management within composite components.
    - `createDescendantContext`: Creates a React context for managing descendant components.
    - `DescendantProvider`: Provides the descendant context to its children.
    - `useDescendant`: A hook for registering a component as a descendant within the context.
    - `useDescendantKeyDown`: A hook for handling keyboard events within a descendant component, used for navigation.
    - `useDescendants`: A hook that provides access to the list of registered descendants.
    - `useDescendantsInit`: Initializes the descendant context.

- **events** [↗](./src/utils/helpers/events.ts) -`composeEventHandlers`: Combines multiple event handlers into a single function. Useful when you need to call both a component's internal handler and a handler passed in as a prop.

- **helpers** [↗](./src/utils/helpers/helpers.ts)

  - `focusElement`: Focuses a given DOM element.
  - `getOwnerDocument`: Gets the document that owns a given element.
  - `isRightClick`: Checks if a mouse event was a right-click.
  - `makeId`: Generates a unique ID string, optionally combining it with a prefix. Useful for creating unique IDs for ARIA attributes.
  - `noop`: A function that does nothing. Useful as a placeholder for optional callback props.

- **hooks** [↗](./src/utils/hooks)

  - `useComposedRefs`: Combines multiple refs (e.g., a forwarded ref and an internal ref) into a single ref. This is useful when you need to interact with a component's DOM node from both inside and outside the component.
  - `useControlledState`: A hook for managing state that can be either controlled (by props) or uncontrolled (managed internally).
  - `useForceUpdate`: Provides a function that forces a component to re-render.
  - `usePrevious`: Returns the previous value of a given variable.
  - `useStatefulRefValue`: Creates a ref whose current value is always up-to-date, avoiding stale closure issues.

- **typecheck** [↗](./src/utils/helpers/typecheck.ts) -`isFunction`: Checks if a value is a function.
  - `isString`: Checks if a value is string

## Additional Notes

- The components are styled using CSS Modules.
- The library utilizes a descendant system to manage relationships between components.
- The `Timeline` component wraps the `vis-timeline` library for enhanced functionality.
