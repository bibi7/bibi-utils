/**
 * 时间戳标准化
 * @param {Number | String} time 时间戳
 * @param {String} gap 间隔符
 * @returns {String} 标准日期时间
 */
export const dateFormatter = (time, gap = '/') => {
  if (!time) throw 'the argument time need to be passed in'
  if (typeof gap !== 'string') throw 'not a validate gap format'

  const timeFormat = typeof time === 'number'
    ? time.toString().length === 13 ? time : time * 1000
    : throw 'not a validate time format'

  if (timeFormat) {
    const date = new Date(timeFormat)
    return `${date.getFullYear()}${gap}${date.getMonth() + 1}${gap}${date.getDate()}`
  }
}
