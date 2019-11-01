/* get请求 */
export function get() {
    return service.get('oneapi/get');
}
/* get请求带参数 */
export function get2(data) {
	return service.get('oneapi/get2', {
		params: data
    });
}
/* post请求带参数 */
export function post(data) {
	return service.post('oneapi/post', data);
}