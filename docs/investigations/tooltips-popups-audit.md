# Floating UI Components Audit Report

## Executive Summary

Analysis reveals 2 distinct implementation patterns coexisting:

1. **Legacy System** (ui-kit): Class-based components with manual positioning
2. **Modern System** (floating): Functional components using Floating UI patterns

## Component Matrix

| Component        | Location             | Tech Stack             | Status     | Key Dependencies                   |
| ---------------- | -------------------- | ---------------------- | ---------- | ---------------------------------- |
| Tooltip (Legacy) | ui-kit/src/Tooltip   | CSS Modules + Context  | Deprecated | Dropdown/Tabs contexts             |
| Popover          | ui-kit/src/Popover   | Class Components       | Active     | Manual rect calculations           |
| MapTooltip (WIP) | floating/src/Tooltip | Floating UI + Maplibre | Alpha      | Map canvas integration             |
| Dropdown         | ui-kit/src/Dropdown  | Context API            | Active     | @konturio/floating (broken import) |

## Dependency Map

```mermaid
graph TD
    subgraph Legacy [ui-kit]
        A[Tooltip] --> B[calculatePlacement.ts]
        A --> C[Dropdown/context.ts]
        A --> D[Tabs/context.ts]
        E[Popover] -->|shares| B
    end

    subgraph Modern [floating]
        F[MapTooltip] --> G[useFloating]
        F --> H[TooltipService]
        H --> I[Portal]
    end

    Modern -.->|planned| J[MapPopup]
    Legacy -->|conflict| K["@konturio/floating"]
```

## Key Findings

1. **Positioning Systems Conflict**

```typescript
// Legacy (ui-kit/Tooltip)
function calculatePlacement(target: DOMRect, tooltip: DOMRect) {
  // Manual boundary checks
}

// Modern (floating/Tooltip)
const { x, y, refs } = useFloating({
  middleware: [autoPlacement(), offset(4)],
});
```

2. **Context System Fragmentation**

```typescript
// ui-kit/Dropdown/context.ts
createContext(); // Isolated implementation

// floating/TooltipService.ts
class TooltipService {
  /* Standalone manager */
}
```

3. **Map Integration Challenges**

```typescript
// MapTooltip.fixture.tsx
map.on('click', (e) => {
  tooltip.show(e.point); // Screen coordinates
  tracker.trackPointPosition(e.lngLat); // Geo coordinates
});
```

## Critical Path Analysis

```mermaid
graph LR
    A[Dependency Resolution] --> B[Coordinate System Unification]
    B --> C[Portal Implementation]
    C --> D[Legacy Deprecation]
    D --> E[MapPopup Integration]

    classDef critical fill:red;
    class A,B critical
```

## Action Plan

1. **Immediate Actions**

```powershell
# Find broken imports
rg '@konturio/floating' packages/

# List all Tooltip consumers
sg -p 'Tooltip' --json | jq '.matches[].file'
```

2. **Migration Priorities**

```text
1. Resolve @konturio/floating import conflict
2. Create unified positioning service
3. Implement shared portal root
4. MapTooltip coordinate system tests
```
