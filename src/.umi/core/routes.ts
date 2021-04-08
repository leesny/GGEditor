// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/lsl/study/npm-app/GGEditor/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/lsl/study/npm-app/GGEditor/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/lsl/study/npm-app/GGEditor/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/lsl/study/npm-app/GGEditor/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/lsl/study/npm-app/GGEditor/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1587363393000,
          "title": "GGEditor - A visual graph editor based on G6 and React",
          "hero": {
            "title": "GGEditor",
            "desc": "<div class=\"markdown\"><p>A visual graph editor based on G6 and React</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/guide/getting-started"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "GGEditor - A visual graph editor based on G6 and React"
      },
      {
        "path": "/zh-CN",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "GGEditor - 基于 G6 和 React 的可视化图编辑器",
          "hero": {
            "title": "GGEditor",
            "desc": "<div class=\"markdown\"><p>基于 G6 和 React 的可视化图编辑器</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/zh-CN/guide/getting-started"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "GGEditor - 基于 G6 和 React 的可视化图编辑器"
      },
      {
        "path": "/examples/component/command",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/command.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/command.md",
          "updatedTime": 1587363393000,
          "title": "Command",
          "group": {
            "title": "Component",
            "order": 2,
            "path": "/examples/component"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "Command"
      },
      {
        "path": "/zh-CN/examples/component/command",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/command.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/command.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "命令",
          "group": {
            "title": "组件",
            "order": 2,
            "path": "/zh-CN/examples/component"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "命令"
      },
      {
        "path": "/examples/component/detail-panel",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/detail-panel.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/detail-panel.md",
          "updatedTime": 1587363393000,
          "title": "DetailPanel",
          "group": {
            "title": "Component",
            "order": 2,
            "path": "/examples/component"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "DetailPanel"
      },
      {
        "path": "/zh-CN/examples/component/detail-panel",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/detail-panel.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/detail-panel.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "详情面板",
          "group": {
            "title": "组件",
            "order": 2,
            "path": "/zh-CN/examples/component"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "详情面板"
      },
      {
        "path": "/examples/component/item-panel",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/item-panel.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/item-panel.md",
          "updatedTime": 1587363393000,
          "title": "ItemPanel",
          "group": {
            "title": "Component",
            "order": 2,
            "path": "/examples/component"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "ItemPanel"
      },
      {
        "path": "/zh-CN/examples/component/item-panel",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/component/item-panel.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/component/item-panel.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "元素面板",
          "group": {
            "title": "组件",
            "order": 2,
            "path": "/zh-CN/examples/component"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "元素面板"
      },
      {
        "path": "/examples/editor/context",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/editor/context.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/editor/context.md",
          "updatedTime": 1587436363000,
          "title": "Context",
          "group": {
            "title": "Editor",
            "order": 0,
            "path": "/examples/editor"
          },
          "nav": {
            "title": "Examples",
            "path": "/examples"
          },
          "slugs": []
        },
        "title": "Context"
      },
      {
        "path": "/zh-CN/examples/editor/context",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/editor/context.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/editor/context.zh-CN.md",
          "updatedTime": 1587436363000,
          "title": "上下文",
          "group": {
            "title": "编辑器",
            "order": 0,
            "path": "/zh-CN/examples/editor"
          },
          "nav": {
            "title": "演示",
            "path": "/zh-CN/examples"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "上下文"
      },
      {
        "path": "/examples/graph/flow",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/graph/flow.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/graph/flow.md",
          "updatedTime": 1587363393000,
          "title": "Flow",
          "group": {
            "title": "Graph",
            "order": 1,
            "path": "/examples/graph"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "Flow"
      },
      {
        "path": "/zh-CN/examples/graph/flow",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/graph/flow.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/graph/flow.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "流程图",
          "group": {
            "title": "图表",
            "order": 1,
            "path": "/zh-CN/examples/graph"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "流程图"
      },
      {
        "path": "/examples/graph/mind",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/graph/mind.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/graph/mind.md",
          "updatedTime": 1587363393000,
          "title": "Mind",
          "group": {
            "title": "Graph",
            "order": 1,
            "path": "/examples/graph"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "Mind"
      },
      {
        "path": "/zh-CN/examples/graph/mind",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/graph/mind.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/graph/mind.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "脑图",
          "group": {
            "title": "图表",
            "order": 1,
            "path": "/zh-CN/examples/graph"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "脑图"
      },
      {
        "path": "/examples/plugin/context-menu",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/context-menu.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/context-menu.md",
          "updatedTime": 1587363393000,
          "title": "ContextMenu",
          "group": {
            "title": "Plugin",
            "order": 3,
            "path": "/examples/plugin"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "ContextMenu"
      },
      {
        "path": "/zh-CN/examples/plugin/context-menu",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/context-menu.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/context-menu.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "右键菜单",
          "group": {
            "title": "插件",
            "order": 3,
            "path": "/zh-CN/examples/plugin"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "右键菜单"
      },
      {
        "path": "/examples/plugin/editable-label",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/editable-label.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/editable-label.md",
          "updatedTime": 1587363393000,
          "title": "EditableLabel",
          "group": {
            "title": "Plugin",
            "order": 3,
            "path": "/examples/plugin"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "EditableLabel"
      },
      {
        "path": "/zh-CN/examples/plugin/editable-label",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/editable-label.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/editable-label.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "标签编辑",
          "group": {
            "title": "插件",
            "order": 3,
            "path": "/zh-CN/examples/plugin"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "标签编辑"
      },
      {
        "path": "/examples/plugin/item-popover",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/item-popover.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/item-popover.md",
          "updatedTime": 1587363393000,
          "title": "ItemPopover",
          "group": {
            "title": "Plugin",
            "order": 3,
            "path": "/examples/plugin"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "ItemPopover"
      },
      {
        "path": "/zh-CN/examples/plugin/item-popover",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/plugin/item-popover.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/plugin/item-popover.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "元素浮层",
          "group": {
            "title": "插件",
            "order": 3,
            "path": "/zh-CN/examples/plugin"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "元素浮层"
      },
      {
        "path": "/examples/register/dom-node",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/register/dom-node.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/register/dom-node.md",
          "updatedTime": 1587363393000,
          "title": "DOMNode",
          "group": {
            "title": "Register",
            "order": 4,
            "path": "/examples/register"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "DOMNode"
      },
      {
        "path": "/zh-CN/examples/register/dom-node",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/register/dom-node.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/register/dom-node.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "DOM 节点",
          "group": {
            "title": "注册",
            "order": 4,
            "path": "/zh-CN/examples/register"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "DOM 节点"
      },
      {
        "path": "/examples/register/node",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/register/node.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/register/node.md",
          "updatedTime": 1587363393000,
          "title": "Node",
          "group": {
            "title": "Register",
            "order": 4,
            "path": "/examples/register"
          },
          "slugs": [],
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "Node"
      },
      {
        "path": "/zh-CN/examples/register/node",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/examples/register/node.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/register/node.zh-CN.md",
          "updatedTime": 1587363393000,
          "title": "节点",
          "group": {
            "title": "注册",
            "order": 4,
            "path": "/zh-CN/examples/register"
          },
          "slugs": [],
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/examples",
            "title": "演示"
          }
        },
        "title": "节点"
      },
      {
        "path": "/guide/getting-started",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/guide/getting-started.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/getting-started.md",
          "updatedTime": 1587545248000,
          "title": "Getting Started",
          "group": {
            "title": "Guide",
            "order": 0,
            "path": "/guide"
          },
          "nav": {
            "title": "Guide",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Installation",
              "heading": "installation"
            },
            {
              "depth": 3,
              "value": "npm",
              "heading": "npm"
            },
            {
              "depth": 3,
              "value": "umd",
              "heading": "umd"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Flow",
              "heading": "flow"
            },
            {
              "depth": 3,
              "value": "Mind",
              "heading": "mind"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            }
          ]
        },
        "title": "Getting Started"
      },
      {
        "path": "/zh-CN/guide/getting-started",
        "component": require('/Users/lsl/study/npm-app/GGEditor/docs/guide/getting-started.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/getting-started.zh-CN.md",
          "updatedTime": 1587545248000,
          "title": "快速上手",
          "group": {
            "title": "指南",
            "order": 0,
            "path": "/zh-CN/guide"
          },
          "nav": {
            "title": "指南",
            "path": "/zh-CN/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 3,
              "value": "npm",
              "heading": "npm"
            },
            {
              "depth": 3,
              "value": "umd",
              "heading": "umd"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 3,
              "value": "流程图",
              "heading": "流程图"
            },
            {
              "depth": 3,
              "value": "脑图",
              "heading": "脑图"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "快速上手"
      },
      {
        "path": "/examples/component",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/examples/component/command"
      },
      {
        "path": "/examples",
        "meta": {},
        "exact": true,
        "redirect": "/examples/editor"
      },
      {
        "path": "/zh-CN/examples/component",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/examples/component/command"
      },
      {
        "path": "/zh-CN/examples",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/examples/editor"
      },
      {
        "path": "/examples/editor",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/examples/editor/context"
      },
      {
        "path": "/zh-CN/examples/editor",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/zh-CN/examples/editor/context"
      },
      {
        "path": "/examples/graph",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/examples/graph/flow"
      },
      {
        "path": "/zh-CN/examples/graph",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/zh-CN/examples/graph/flow"
      },
      {
        "path": "/examples/plugin",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/examples/plugin/context-menu"
      },
      {
        "path": "/zh-CN/examples/plugin",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/zh-CN/examples/plugin/context-menu"
      },
      {
        "path": "/examples/register",
        "meta": {
          "order": 4
        },
        "exact": true,
        "redirect": "/examples/register/dom-node"
      },
      {
        "path": "/zh-CN/examples/register",
        "meta": {
          "order": 4
        },
        "exact": true,
        "redirect": "/zh-CN/examples/register/dom-node"
      },
      {
        "path": "/guide",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/guide/getting-started"
      },
      {
        "path": "/zh-CN/guide",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/zh-CN/guide/getting-started"
      }
    ],
    "title": "GGEditor",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
