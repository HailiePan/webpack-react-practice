var l = Object.defineProperty;
var m = (i, e, o) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o;
var s = (i, e, o) => (m(i, typeof e != "symbol" ? e + "" : e, o), o);
var g = /* @__PURE__ */ ((i) => (i.ChangeStation = "ChangeStation", i))(g || {});
class p {
  /**
   * 初始化
   * @param {string} domId
   * @param {{ url: string }} options
   * @returns
   */
  constructor(e, o) {
    // 目标窗口
    s(this, "targetWindow", null);
    /**
     * 加载过程中的hook信息
     */
    s(this, "loadingHook", {
      // 页面是否已加载
      viewLoaded: !1,
      // 事件回调
      callback: null
    });
    /**
     * 场景加载完成的处理
     */
    s(this, "onLoad", (e) => {
      this.loadingHook.callback = e, this.loadingHook.viewLoaded && (e == null || e());
    });
    /**
     * 调用Api
     */
    s(this, "invoke", (e, o, t) => {
      const n = (r) => {
        try {
          const a = r.data;
          if (a.type !== "OCSDKPlatform")
            return;
          a.data.method === e && a.period === "invokeComplete" && (t == null || t(), setTimeout(() => {
            this.targetWindow.removeEventListener("message", n);
          }, 0));
        } catch {
        }
      };
      this.targetWindow.addEventListener("message", n);
      const d = {
        type: "OCSDKClient",
        version: "1.0",
        period: "invoke",
        data: {
          method: e,
          params: o
        }
      };
      this.targetWindow.postMessage(d);
    });
    let t = null;
    if (typeof e == "string" ? t = document.getElementById(e) : e instanceof HTMLElement && (t = e), !t)
      return;
    const n = document.createElement("iframe");
    n.src = `${o.url}/player`, n.style.width = "100%", n.style.height = "100%", n.style.border = "none", t.append(n), this.targetWindow = n.contentWindow, n.contentWindow.addEventListener("load", (d) => {
      var r, a;
      this.loadingHook.viewLoaded = !0, (a = (r = this.loadingHook).callback) == null || a.call(r);
    });
  }
  destory() {
    this.targetWindow = null, this.loadingHook = null;
  }
}
class v {
  constructor() {
    /**
     * 实现相应的方法
     */
    s(this, "onImplementation", null);
    s(this, "destory", () => {
      window.removeEventListener("message", this.onReceiveMessage);
    });
    /**
     * 消息通道
     * @param e 消息体
     * @returns
     */
    s(this, "onReceiveMessage", (e) => {
      var o;
      try {
        const t = e.data;
        if (t.type !== "OCSDKClient")
          return;
        t.data && ((o = this.onImplementation) == null || o.call(this, t.data.method, t.data.params, (n) => {
          this.onImplementationCallback(t.data.method, n);
        }));
      } catch {
      }
    });
    /**
     * 上报执行结果
     */
    s(this, "onImplementationCallback", (e, o) => {
      const t = {
        type: "OCSDKPlatform",
        version: "1.0",
        period: "invokeComplete",
        data: {
          method: e,
          resault: o
        }
      };
      window.postMessage(t);
    });
    window.addEventListener("message", this.onReceiveMessage);
  }
}
export {
  p as OCClientSDK,
  v as OCPlatformSDK,
  g as OCSDKMethodType
};
//# sourceMappingURL=OCSDK.js.map
