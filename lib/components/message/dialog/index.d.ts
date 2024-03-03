/**
 * @description dialog api type
 * @author 阿怪
 * @date 2022/4/16 23:11
 * @version v1.0.0
 *
 * @name m-dialog
 * @docDescription Dialog component with shuimo-ui style.
 *                 水墨组件的弹窗交互组件。
 * @docUrl https://shuimo.design/dialog
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MTeleportProps } from '../../../types/common/common';
import { ModelMask } from '../../../types/common/model';

export declare type DialogProps = {
  /**
     * @description dialog mask option
     *              弹窗背景配置
     * @type ModelMask
     * @default show:true, clickClose:true
     */
  mask?: ModelMask,
  /**
     * @description dialog visible value
     *              弹窗是否显示参数
     * @type boolean
     * @default false
     */
  visible?: boolean,
  /**
     * @description close button visible value
     *              是否显示关闭按钮
     * @type boolean
     * @default true
     */
  closeBtn?: boolean,
  /**
     * @description dialog teleport
     *              弹窗传送
     * @type teleport props
     * @default ''
     */
  teleport?: MTeleportProps
};
