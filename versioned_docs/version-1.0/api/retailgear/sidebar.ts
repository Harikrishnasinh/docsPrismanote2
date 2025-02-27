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
  ],
};

export default sidebar.apisidebar;
