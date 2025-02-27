import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/retailgear/retailgear-app",
    },
    {
      type: "category",
      label: "core-services > supplier > business partner list",
      items: [
        {
          type: "doc",
          id: "api/retailgear/1-supplier-business-partners-list",
          label: "1. Supplier Business Partners List",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "core-services > stock-list",
      items: [
        {
          type: "doc",
          id: "api/retailgear/2-supplier-stock-list",
          label: "2. Supplier Stock List",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > sales-list",
      items: [
        {
          type: "doc",
          id: "api/retailgear/3-supplier-sales-list",
          label: "3. Supplier Sales list",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > transaction > list",
      items: [
        {
          type: "doc",
          id: "api/retailgear/4-transaction-list",
          label: "4. Transaction List",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > shared-transaction > list",
      items: [
        {
          type: "doc",
          id: "api/retailgear/5-shared-transaction-list",
          label: "5. Shared Transaction List",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > shared-transaction > create",
      items: [
        {
          type: "doc",
          id: "api/retailgear/6-shared-transaction-create",
          label: "6. Shared Transaction create",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > shared-transaction > detail",
      items: [
        {
          type: "doc",
          id: "api/retailgear/7-shared-transaction-detail",
          label: "7. Shared Transaction detail",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > shared-transaction > test > version > 1",
      items: [
        {
          type: "doc",
          id: "api/retailgear/8-shared-transaction-detail-test-1-version",
          label: "8. Shared Transaction detail test 1 version",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "cash-services > shared-transaction > test > version > 2",
      items: [
        {
          type: "doc",
          id: "api/retailgear/9-shared-transaction-detail-test-1-version",
          label: "9. Shared Transaction detail test 1 version",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
