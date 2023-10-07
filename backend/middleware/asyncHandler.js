/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 21:47:41
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-06 21:48:57
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
