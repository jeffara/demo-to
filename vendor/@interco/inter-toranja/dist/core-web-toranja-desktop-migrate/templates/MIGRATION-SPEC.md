# <ModuleName> — Migration Spec (inter-ui → Toranja Desktop)

## Metadata

- Consumer project: <project-name>
- Module path(s): <path/to/module>
- Toranja version: <@interco/inter-toranja version>
- Catalog version: <same as Toranja version>
- Date: <YYYY-MM-DD>
- Author: <agent or developer>
- Spec-flow phase: EXPLORE (output) → IMPLEMENT (after approval)

## Approval gate

> **Required before `/implement`.** Do not edit application code until approved.

- [ ] Human reviewed and approved
- Approved by: \_\_\_
- Date: \_\_\_

---

## 1) Inventory (AC1)

### Import scan results

| File | inter-ui import | Symbol | Usage count |
| ---- | --------------- | ------ | ----------- |
|      |                 |        |             |

### Legacy anti-patterns found

| File | Pattern                      | Line hint |
| ---- | ---------------------------- | --------- |
|      | `dsType` / `theme=tamarindo` |           |

---

## 2) Component mapping (AC2)

| #   | inter-ui | Toranja | Status    | Home IB | Prop notes |
| --- | -------- | ------- | --------- | ------- | ---------- |
| 1   |          |         | `DROP_IN` | P0      |            |

### Items requiring composition or split

| inter-ui | Toranja composition | Status    | Notes |
| -------- | ------------------- | --------- | ----- |
|          |                     | `COMPOSE` |       |

---

## 3) Effort estimate (AC3)

### Per item

| #   | Item | Size | Justification |
| --- | ---- | ---- | ------------- |
| 1   |      | S    |               |

### Module total

| Metric              | Value              |
| ------------------- | ------------------ |
| Items S             |                    |
| Items M             |                    |
| Items L / blocked   |                    |
| **Estimated total** |                    |
| **Suggested order** | S → M → L; P0 → P1 |

---

## 4) Divergences (AC4)

| ID  | Category   | Severity | Description | Mitigation |
| --- | ---------- | -------- | ----------- | ---------- |
| D1  | API        | blocker  |             |            |
| D2  | surface    | major    |             |            |
| D3  | breakpoint | minor    |             |            |
| D4  | behavior   | major    |             |            |

---

## 5) Migration plan (for IMPLEMENT — AC6)

### Execution order

1. [ ] Imports (`@interco/inter-ui` → `@interco/inter-toranja`)
2. [ ] Props (per mapping table §2)
3. [ ] Surface (`toranja-surface="desktop"` on: \_\_\_)
4. [ ] Tokens (replace hardcoded values)
5. [ ] Tests (files: \_\_\_)

### Per-file checklist

| File | Step    | Done |
| ---- | ------- | ---- |
|      | imports | [ ]  |
|      | props   | [ ]  |
|      | surface | [ ]  |
|      | tokens  | [ ]  |
|      | tests   | [ ]  |

---

## 6) Unresolved / deferred (AC9)

| inter-ui | Status            | Reason | Follow-up              |
| -------- | ----------------- | ------ | ---------------------- |
|          | `MISSING_TORANJA` |        | Issue / squad decision |

---

## 7) VERIFY handoff (AC13)

After IMPLEMENT, run `/review` with `consumer-verify-checklist.md`.

- [ ] Checklist attached to MR or Issue comment
- [ ] Screenshots at desktop viewport (≥ 1240px)
- [ ] No `dsType` / `theme=tamarindo` remaining in module
