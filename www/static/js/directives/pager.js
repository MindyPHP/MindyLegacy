var Pager = function (data, $rootScope) {
    this.model = data.model;
    this.params = data.params || {};
    this.callback = data.callback;
    this.$location = data.$location || null;

    this.pagesCount = null;
    this._currentPage = 1;

    this.query = function () {
        var self = this;
        this.model.query(_.extend(this.params, {page: this._currentPage}), function(models) {
            console.log(models.meta.total);
            self.pagesCount = models.meta.pagesCount;
            self.callback.apply(this, [models]);
        });
    };

    this.max = function () {
        return this.total;
    };

    this.currentPage = function () {
        return this._currentPage;
    };

    this.hasPage = function(num, q) {
        var page = parseInt(num);
        return page > 0 && page <= this.pagesCount;
    };

    this.toPage = function(num) {
        var page = parseInt(num);
        if (page < 0 || page > this.pagesCount) {
            return;
        }

        this._currentPage = page;
        $rootScope.$broadcast("pagination:page", this.counter);
        this.query();
    };

    this.nextPage = function () {
        if (this.hasNext()) {
            this.toPage(this._currentPage++);
        }
    };

    this.prevPage = function () {
        if (this.hasPrevious()) {
            this.toPage(this._currentPage--);
        }
    };

    this.hasPrevious = function () {
        return this._currentPage > 1;
    };

    this.hasNext = function () {
        return this._currentPage < this.pagesCount;
    };
};
