define(['models/model'], function(Model) {
	var TestModel = new Model();

	describe('Model', function() {
		it('exists', function() {
			expect(TestModel).toBeDefined();
		});

		it('has an initialize method', function() {
			expect(TestModel.initialize).toBeDefined();
		});

		it('has a title on initialize', function() {
			expect(TestModel.get('title')).toNotBe(undefined);
		});
	});
});