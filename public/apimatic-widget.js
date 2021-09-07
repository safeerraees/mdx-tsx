/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
let APIMaticWidget = class APIMaticWidget extends LitElement {
    constructor() {
        super(...arguments);
        this.apiKey = 'aNevcjuZmnpNoxByvnLpxOQfIyDDZQy0UswqjiWxeD3d6VdOelI6t7whM02BEZGG';
        this.java = false;
        this.dotNet = false;
        this.php = false;
        this.ts = false;
        this.ruby = false;
        this.python = false;
        this.saveData = (function () {
            const a = document.createElement("a");
            document.body.appendChild(a);
            // a.style = "display: none";
            return function (blob, fileName) {
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
            };
        }());
    }
    render() {
        return html `
      ${this.dotNet
            ? html `<div
          id="cs_net_standard_lib"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.145"
              height="16.194"
              viewBox="0 0 16.145 16.194"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`
            : ''}
      ${this.java
            ? html `<div
          id="java_eclipse_jre_lib"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.831"
              height="15.317"
              viewBox="0 0 11.831 15.317"
            >
              <defs>
                <style>
                  .aJava {
                    fill: #e4463f;
                  }
                </style>
              </defs>
              <path
                class="aJava"
                d="M15.96,15.706a.262.262,0,0,0,.06-.076c3.01-1.493,1.618-2.927.647-2.734a2.368,2.368,0,0,0-.344.089.542.542,0,0,1,.257-.19C18.5,12.15,19.979,14.7,15.96,15.706Zm-1.754-4.539c.9,1.213-1.063,2.181-1.063,2.181a1.092,1.092,0,0,0,.2-1.616c-2.623-2.885,2.869-4.194,2.869-4.2C12.716,9.474,13.362,10.035,14.206,11.167ZM12.625,8.448c-2.6,1.964-.594,3.083,0,4.363-1.52-1.31-2.636-2.463-1.888-3.536,1.1-1.575,4.142-2.339,3.47-4.868C14.206,4.408,15.872,6,12.625,8.448Zm-1.835,4.391s-2.915.662-1.032.9a22.9,22.9,0,0,0,3.857-.04c1.207-.1,2.418-.3,2.418-.3a5.272,5.272,0,0,0-.733.375c-2.961.743-8.68.4-7.034-.363A5.739,5.739,0,0,1,10.789,12.839Zm.142,3.87a9.6,9.6,0,0,0,3.321-.134,5.969,5.969,0,0,0,.884.411c-3.141,1.285-7.108-.075-4.642-.733C10.495,16.253,9.882,16.593,10.931,16.708Zm-.457-1.542a13.574,13.574,0,0,0,4.286-.2,1.914,1.914,0,0,0,.66.384c-3.8,1.06-8.026.084-5.309-.778C10.111,14.576,9.424,15.062,10.474,15.166ZM9.255,17.451a2.3,2.3,0,0,0-.554.059c-.337.07-1.411.4-.838.637,1.592.661,7.324.5,9.137-.021.953-.276.5-.633.5-.633,1.661.716-3.609,2.153-10.011,1.162C5.141,18.291,8.618,17.023,9.255,17.451Zm6.873,1.709c2.186-.392,2.388-.887,2.388-.887-.105,1.305-4.542,1.58-7.43,1.4a5.049,5.049,0,0,1-2.268-.409A24.846,24.846,0,0,0,16.128,19.161Z"
                transform="translate(-6.684 -4.408)"
              />
            </svg>
          </div>`
            : ''}
      ${this.php
            ? html `<div
          id="php_generic_lib_v2"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.594"
              height="8.313"
              viewBox="0 0 16.594 8.313"
            >
              <defs>
                <style>
                  .aPHP {
                    fill: #8f9ed7;
                  }
                </style>
              </defs>
              <path
                class="aPHP"
                d="M12.679,9.989c-4.582,0-8.3,1.861-8.3,4.157S8.1,18.3,12.679,18.3s8.3-1.861,8.3-4.157S17.261,9.989,12.679,9.989ZM10.52,14.955a1.636,1.636,0,0,1-.66.337,3.306,3.306,0,0,1-.925.062H8.086L7.851,16.7H6.859l.885-4.565H9.65a1.6,1.6,0,0,1,1.255.461,1.4,1.4,0,0,1,.237,1.253,1.974,1.974,0,0,1-.623,1.109Zm2.894.4.391-1.936a.57.57,0,0,0-.049-.477.686.686,0,0,0-.494-.138h-.786l-.507,2.551h-.984l.885-4.43h.984l-.236,1.208H13.5a1.715,1.715,0,0,1,1.142.3.847.847,0,0,1,.188.876l-.411,2.046Zm5.467-1.5a1.946,1.946,0,0,1-.623,1.1,1.629,1.629,0,0,1-.66.337,3.308,3.308,0,0,1-.925.062h-.85L15.589,16.7H14.6l.885-4.565h1.907a1.6,1.6,0,0,1,1.255.461A1.419,1.419,0,0,1,18.881,13.853ZM17.013,12.8h-.679l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.136,1.136,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.754-.231Zm-7.738,0H8.6l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.132,1.132,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.753-.231Z"
                transform="translate(-4.382 -9.989)"
              />
            </svg>
          </div>`
            : ''}
      ${this.python
            ? html `<div
          id="python_generic_lib"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.674"
            height="15.665"
            viewBox="0 0 15.674 15.665"
          >
            <defs>
              <style>
                .aPython {
                  fill: #3b8fc6;
                }
              </style>
            </defs>
            <path
              class="aPython"
              d="M12.644,14.291H16.42A1.9,1.9,0,0,0,18.3,12.368V8.809a2.092,2.092,0,0,0-1.885-1.943,11.977,11.977,0,0,0-1.967-.153,10.747,10.747,0,0,0-1.788.153c-1.6.279-1.871.864-1.871,1.943v1.385h3.755v.512H9.335a2.355,2.355,0,0,0-2.362,1.9,6.842,6.842,0,0,0,0,3.78c.269,1.107.91,1.877,2.009,1.877H10.27V16.589a2.379,2.379,0,0,1,2.374-2.3Zm-.237-5.007a.712.712,0,1,1,.709-.71A.71.71,0,0,1,12.406,9.284ZM22.091,12.6c-.272-1.081-.79-1.9-1.891-1.9H18.817v1.661a2.387,2.387,0,0,1-2.4,2.307H12.644a1.943,1.943,0,0,0-1.855,1.962V20.2c0,1.013.874,1.609,1.873,1.9a6.341,6.341,0,0,0,3.762,0c.952-.272,1.876-.821,1.876-1.9V18.771H14.543v-.512H20.2c1.1,0,1.509-.739,1.891-1.877a6.29,6.29,0,0,0,0-3.78Zm-5.433,7.119a.712.712,0,1,1-.709.71.71.71,0,0,1,.709-.71Z"
              transform="translate(-6.707 -6.714)"
            />
          </svg>
        </div>`
            : ''}
      ${this.ruby
            ? html `<div
          id="ruby_generic_lib"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.839"
              height="14.033"
              viewBox="0 0 14.839 14.033"
            >
              <defs>
                <style>
                  .aRuby {
                    fill: #f6213a;
                  }
                </style>
              </defs>
              <path
                class="aRuby"
                d="M10.664,20.19l9.8,1.32-3.315-5.444L10.664,20.19ZM21.393,10l-.868,1.287q-1.49,2.211-2.978,4.422c-.055.082-.127.147-.049.273q1.439,2.343,2.864,4.694a6.289,6.289,0,0,0,.5.731q.29-5.7.578-11.4L21.393,10ZM8.305,14.868a.237.237,0,0,0,.209.041c.92-.447,1.845-.882,2.745-1.364a4.315,4.315,0,0,0,.772-.668q1.255-1.135,2.508-2.274a.6.6,0,0,0,.142-.151c.3-.578.595-1.16.9-1.758-.363-.135-.709-.267-1.058-.387a.257.257,0,0,0-.173.044c-.808.445-1.633.867-2.416,1.353a7.994,7.994,0,0,0-1.057.913c-.559.5-1.118,1.008-1.669,1.52a2.812,2.812,0,0,0-.393.455c-.376.541-.742,1.089-1.124,1.654.214.218.408.426.615.62Zm3.361-.74-1.382,5.76,6.494-4.128-5.112-1.632Zm9.165-4.111-5.52.91,1.873,4.494,3.647-5.4Zm-9.088,3.721,5.01,1.6L14.9,10.89l-3.157,2.847ZM8.375,15.979c-.595,1.4-1.169,2.757-1.753,4.135l3.34-.1ZM10,19.058l.041-.009c.4-1.645.808-3.278,1.217-4.987L8.58,15.436c.457,1.171.944,2.407,1.421,3.623ZM20.158,9.75q-.8-.209-1.6-.417c-.767-.2-1.535-.4-2.3-.6-.1-.025-.165-.041-.221.072-.271.548-.55,1.091-.826,1.636a.4.4,0,0,0-.013.081l4.96-.741V9.75ZM17.064,8.5,21.41,9.691l-.718-2.019-3.622.793Zm-6.695,12a12.827,12.827,0,0,0-1.636,0c-.449.008-.9.025-1.346.038a.18.18,0,0,0-.139.06l11.124,1.015.007-.049-3.566-.48c-1.481-.2-2.96-.419-4.445-.588ZM6.694,18.852q.717-1.641,1.433-3.281a.2.2,0,0,0-.049-.272c-.2-.189-.387-.392-.606-.617L6.6,18.943l.032.015A.7.7,0,0,0,6.694,18.852ZM16.112,8.215c.805-.2,1.623-.365,2.436-.544.052-.011.1-.028.156-.043L18.7,7.589,15.2,8.052a1.32,1.32,0,0,0,.908.163Z"
                transform="translate(-6.597 -7.589)"
              />
            </svg>
          </div>`
            : ''}
      ${this.ts
            ? html `<div
          id="ts_generic_lib"
          @click=${this._onClick}
          class=${classMap({ icon: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="13.979"
              height="15.912"
              viewBox="0 0 13.979 15.912"
            >
              <defs>
                <style>
                  .aTS
                  }
                  .cTS {
                    clip-path: url(#c);
                  }
                  .dTS {
                    fill: url(#d);
                  }
                  .eTS {
                    clip-path: url(#e);
                  }
                  .fTS {
                    fill: url(#f);
                  }
                  .gTS {
                    fill: #fff;
                  }
                </style>
                <clipPath id="a">
                  <path
                    d="M200.967,226.026l-6.236,3.6a.752.752,0,0,0-.377.652v7.2a.752.752,0,0,0,.377.652l6.237,3.6a.755.755,0,0,0,.753,0l6.236-3.6a.754.754,0,0,0,.376-.652v-7.2a.752.752,0,0,0-.377-.652l-6.235-3.6a.758.758,0,0,0-.755,0"
                    transform="translate(-194.354 -225.925)"
                  />
                </clipPath>
                <linearGradient
                  id="b"
                  x1="-0.847"
                  y1="-1.034"
                  x2="-0.838"
                  y2="-1.034"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.3" stop-color="#3e863d" />
                  <stop offset="0.5" stop-color="#55934f" />
                  <stop offset="0.8" stop-color="#5aad45" />
                </linearGradient>
                <clipPath id="c">
                  <path
                    d="M195.4,238.062a.755.755,0,0,0,.222.195l5.35,3.09.891.512a.756.756,0,0,0,.434.1.772.772,0,0,0,.148-.027l6.577-12.043a.747.747,0,0,0-.175-.139l-4.083-2.358-2.158-1.242a.793.793,0,0,0-.2-.078Zm0,0"
                    transform="translate(-195.398 -226.069)"
                  />
                </clipPath>
                <linearGradient
                  id="d"
                  x1="-0.742"
                  y1="-0.932"
                  x2="-0.737"
                  y2="-0.932"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.57" stop-color="#3e863d" />
                  <stop offset="0.72" stop-color="#619857" />
                  <stop offset="1" stop-color="#76ac64" />
                </linearGradient>
                <clipPath id="e">
                  <path
                    d="M203.541,225.937a.759.759,0,0,0-.3.1l-6.219,3.589,6.706,12.214a.747.747,0,0,0,.268-.092l6.236-3.6a.756.756,0,0,0,.364-.515l-6.836-11.678a.783.783,0,0,0-.153-.015l-.062,0"
                    transform="translate(-197.021 -225.934)"
                  />
                </clipPath>
                <linearGradient
                  id="f"
                  x1="-2.148"
                  y1="-2.103"
                  x2="-2.138"
                  y2="-2.103"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.16" stop-color="#6bbf47" />
                  <stop offset="0.38" stop-color="#79b461" />
                  <stop offset="0.47" stop-color="#75ac64" />
                  <stop offset="0.7" stop-color="#659e5a" />
                  <stop offset="0.9" stop-color="#3e863d" />
                </linearGradient>
              </defs>
              <g transform="translate(-2.011 -1.044)">
                <g transform="translate(-5.147 -4.067)">
                  <g class="aTS" transform="translate(7.158 5.111)">
                    <path
                      class="bTS"
                      d="M178.361,197.217,160.788,188.6l-9.01,18.381L169.35,215.6Zm0,0"
                      transform="translate(-158.08 -194.128)"
                    />
                  </g>
                  <g class="cTS" transform="translate(7.313 5.132)">
                    <path
                      class="d"
                      d="M144.07,194.225l12.408,16.794,16.41-12.124L160.479,182.1Zm0,0"
                      transform="translate(-151.668 -188.609)"
                    />
                  </g>
                  <g class="eTS" transform="translate(7.553 5.112)">
                    <path
                      class="fTS"
                      d="M197.02,225.934v15.9h13.571v-15.9Zm0,0"
                      transform="translate(-197.02 -225.934)"
                    />
                  </g>
                </g>
                <g transform="translate(-3.939 -7.63)">
                  <path
                    class="gTS"
                    d="M175.308,173.254a.875.875,0,0,1-.436-.117l-1.388-.822c-.207-.116-.106-.157-.038-.181a2.8,2.8,0,0,0,.628-.286.105.105,0,0,1,.1.007l1.066.633a.141.141,0,0,0,.129,0l4.158-2.4a.131.131,0,0,0,.063-.112v-4.8a.134.134,0,0,0-.064-.115l-4.156-2.4a.128.128,0,0,0-.128,0l-4.156,2.4a.133.133,0,0,0-.066.113v4.8a.128.128,0,0,0,.065.111l1.139.658c.618.309,1-.055,1-.422v-4.736a.119.119,0,0,1,.121-.12h.527a.119.119,0,0,1,.12.12v4.738a1.153,1.153,0,0,1-1.231,1.3,1.782,1.782,0,0,1-.959-.26l-1.091-.629a.879.879,0,0,1-.436-.759v-4.8a.874.874,0,0,1,.436-.758l4.162-2.4a.912.912,0,0,1,.874,0l4.157,2.4a.877.877,0,0,1,.436.758v4.8a.88.88,0,0,1-.436.758l-4.157,2.4a.873.873,0,0,1-.438.117"
                    transform="translate(-163.115 -150.95)"
                  />
                  <path
                    class="gTS"
                    d="M212.043,188.99c-1.819,0-2.2-.835-2.2-1.536a.12.12,0,0,1,.12-.12h.537a.12.12,0,0,1,.119.1c.081.547.323.823,1.423.823.876,0,1.249-.2,1.249-.663,0-.267-.106-.466-1.468-.6-1.139-.112-1.842-.363-1.842-1.274,0-.839.708-1.339,1.893-1.339,1.331,0,1.991.462,2.074,1.455a.121.121,0,0,1-.032.093.124.124,0,0,1-.089.038h-.54a.119.119,0,0,1-.117-.094c-.13-.576-.444-.76-1.3-.76-.957,0-1.068.333-1.068.583,0,.3.131.391,1.422.562s1.885.409,1.885,1.307-.756,1.425-2.073,1.425m5.065-5.089h.139a.121.121,0,0,0,.136-.127c0-.123-.084-.123-.131-.123H217.1Zm-.17-.393h.309c.106,0,.314,0,.314.237a.207.207,0,0,1-.17.221c.124.008.132.09.149.2a.876.876,0,0,0,.047.237h-.19c-.005-.042-.034-.271-.034-.283-.012-.051-.03-.076-.094-.076h-.157v.36h-.174Zm-.372.448a.672.672,0,1,0,.669-.67.673.673,0,0,0-.669.67m1.474,0a.8.8,0,1,1-.8-.8.8.8,0,0,1,.8.8"
                    transform="translate(-198.566 -169.992)"
                  />
                </g>
              </g>
            </svg>
          </div>`
            : ''}
    `;
    }
    async _onClick(event) {
        try {
            const template = event.currentTarget.id;
            console.log(template);
            console.log(event.currentTarget);
            if (!template) {
                return;
            }
            const url = `https://www.apimatic.io/api/api-entities/${this.apiKey}/portal-artifacts/sdks/generated-file?template=${template}`;
            const response = await fetch(url);
            const contentHeader = response.headers.get('content-disposition');
            const name = contentHeader === null ? template : contentHeader.split('=')[1];
            this.saveData(await response.blob(), name);
        }
        catch (e) {
            console.log('error', e);
        }
    }
};
APIMaticWidget.styles = css `
    .icon {
      cursor: pointer;
      display: inline-block !important;
    }
  `;
__decorate([
    property({ type: String })
], APIMaticWidget.prototype, "apiKey", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "java", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "dotNet", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "php", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "ts", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "ruby", void 0);
__decorate([
    property({ type: Boolean })
], APIMaticWidget.prototype, "python", void 0);
APIMaticWidget = __decorate([
    customElement('apimatic-widget')
], APIMaticWidget);
export { APIMaticWidget };
//# sourceMappingURL=apimatic-widget.js.map