const vkTheme = {
	inited: false,
	callbacks: [],
	handler: function (e) {
		if (e.data && e.data.type === 'extension_theme' || e.data && e.data.type === 'extension_theme_changed') {
			for (let item of vkTheme.callbacks) {
				item(e.data.theme, e.data.type);
			}
		}
	},
	subscribe: function (callback) {
		this.callbacks.push(callback);
		if (!this.inited) {
			window.addEventListener('message', this.handler);
			this.inited = true;
			this.send('init_extension_theme');
		}
	},
	unscribe: function (callback = null) {
		if (callback) {
			const indx = callbacks.indexOf(callback);
			if (indx !== -1) {
				callbacks.splice(indx, 1);
			}
			if (!this.callbacks.length) {
				this.remove_event();
			}
		} else {
			this.remove_event();
		}
	},
	remove_event: function () {
		if (this.inited) {
			window.removeEventListener('message', this.handler);
		}
		this.callbacks = [];
		this.inited = false;
	},
	get: function () {
		this.send('get_extension_theme');
	},
	send: function (type) {
		top.postMessage({type: type}, 'https://vk.com');
	}
};

export default vkTheme;
