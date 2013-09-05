define(['models/model'], function(Model) {
    return describe('Model :: Test Model', function() {
        describe('Create model', function() {
            it('should exist', function() {
                expect(Model).toBeDefined();
            });

            it('should have a default title', function() {
                var newModel = new Model();

                expect(newModel.get('title')).toEqual('empty model');
            });
        });
    });
});
