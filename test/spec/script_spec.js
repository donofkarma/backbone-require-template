describe('Template', function() {

	it('exists', function() {
		expect(Template).toBeDefined();
	});

	it('has a DOM ready init', function() {
		expect(Template.init).toBeDefined();
	});

	it('has a page load init', function() {
		expect(Template.pageInit).toBeDefined();
	});

});