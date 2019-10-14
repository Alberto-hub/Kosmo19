/**
 * Created by banana on 8/15/16.
 */
requirejs([ "common" ], function () {
    requirejs([ "loglevel" ], function (log) {
        var _searchBtnRef = null;
        var _searchKeywordRef = null;

        var _initView = function() {
            _searchKeywordRef = $("#search_keyword");
            _searchBtnRef = $("#search");
            _bindEvent();
        }
        var _bindEvent = function() {
            _searchBtnRef.click(function() {
                var searchKeyword = _searchKeywordRef.val();
                log.info("search keyword : " + searchKeyword);
            });
        }

        var _init = function () {
            _initView();
        };
        _init();
    });
});