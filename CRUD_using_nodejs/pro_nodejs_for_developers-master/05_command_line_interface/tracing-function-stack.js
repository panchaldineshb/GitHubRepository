(function foo() {
	(function bar() {
		(function baz() {
			console.trace('test-trace');
		})();
	})();
})();