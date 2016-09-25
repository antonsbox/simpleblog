System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/common", '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, common_1, http_1;
    var Message, PostRow, CKEDITOR, SimpleBlogPost, SimpleBlogApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            Message = (function () {
                function Message(id, checked) {
                    this.id = id;
                    this.checked = checked || false;
                }
                return Message;
            }());
            PostRow = (function () {
                function PostRow() {
                    this.select = new core_1.EventEmitter();
                    this.edit = new core_1.EventEmitter();
                }
                PostRow.prototype.selectPost = function (value, checked) {
                    var msg = new Message(value, checked);
                    this.select.emit(msg);
                    return false;
                };
                PostRow.prototype.editPost = function (id) {
                    var msg = new Message((id));
                    this.edit.emit(msg);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PostRow.prototype, "select", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PostRow.prototype, "edit", void 0);
                __decorate([
                    core_1.Input('blog-tr'), 
                    __metadata('design:type', Object)
                ], PostRow.prototype, "row", void 0);
                PostRow = __decorate([
                    core_1.Component({
                        selector: '[blog-tr]',
                        template: "<td>\n    <div class=\"ui checkbox\">\n        <input  #checkblog type=\"checkbox\" value=\"{{row.post_id}}\"\n                (change)=\"selectPost(checkblog.value,checkblog.checked)\">\n        <label></label>\n    </div>\n</td>\n<td>{{row.title}}</td>\n<td>{{row.created}}</td>\n<td><button #edit (click)=\"editPost(edit.value)\" value=\"{{row.post_id}}\" class=\"ui basic button\">\n        <i class=\"icon edit\"></i>Edit</button>\n</td>\n          "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostRow);
                return PostRow;
            }());
            CKEDITOR = (function () {
                function CKEDITOR() {
                    this.rows = 10;
                    this.editorReady = new core_1.EventEmitter();
                }
                CKEDITOR.prototype.ngOnInit = function () {
                    CKEDITOR.editor = window['CKEDITOR']['replace']('targetId');
                };
                CKEDITOR.prototype.ngAfterViewInit = function () {
                    CKEDITOR.editor.setData('type text here...');
                    this.editorReady.emit(true);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "targetId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "rows", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "cols", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CKEDITOR.prototype, "editorReady", void 0);
                CKEDITOR = __decorate([
                    core_1.Component({
                        selector: 'CKEDITOR',
                        template: "\n     <textarea  name=\"targetId\" id=\"targetId\" rows=\"rows\" cols=\"cols\">\n     </textarea>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CKEDITOR);
                return CKEDITOR;
            }());
            SimpleBlogPost = (function () {
                function SimpleBlogPost(title, content, id, creationTime) {
                    if (id)
                        this.post_id = id;
                    else
                        this.post_id = this.getRandomInt(1, 10000);
                    this.title = title;
                    this.content = content;
                    if (creationTime)
                        this.created = creationTime;
                    else
                        this.created = this.formatDate(new Date());
                }
                SimpleBlogPost.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                SimpleBlogPost.prototype.formatDate = function (date) {
                    var dd = date.getDate();
                    var DD = date.getDate().toString();
                    if (dd < 10)
                        DD = '0' + dd;
                    var mm = date.getMonth() + 1;
                    var MM = date.getMonth().toString();
                    if (mm < 10)
                        MM = '0' + mm;
                    var yy = date.getFullYear() % 100;
                    var YY = date.getFullYear().toString();
                    if (yy < 10)
                        YY = '0' + yy;
                    var hh = date.getHours();
                    var HH = date.getHours().toString();
                    if (hh < 10)
                        HH = '0' + hh;
                    var mn = date.getMinutes();
                    var MN = date.getMinutes().toString();
                    if (mn < 10)
                        MN = '0' + mn;
                    var ss = date.getSeconds();
                    var SS = date.getSeconds().toString();
                    if (ss < 10)
                        SS = '0' + ss;
                    var ms = date.getMilliseconds();
                    var MS = date.getMilliseconds().toString();
                    if (ms < 10)
                        MS = '0' + ms;
                    return YY + '-' + MM + '-' + DD + ' ' + HH + ':' + MN + ":" + SS;
                };
                return SimpleBlogPost;
            }());
            SimpleBlogApp = (function () {
                function SimpleBlogApp(http) {
                    this.selected = false;
                    this.newPostPressed = false;
                    this.valueRequire = false;
                    this.selectedPosts = [];
                    this.selectedId = -1;
                    this.selectedIndex = -1;
                    this.selectedTitle = '';
                    this.tmpTite = '';
                    this.isEditPost = false;
                    this.isNewPost = false;
                    this.createData = '{';
                    this.delimiter = '';
                    this.http = http;
                    this.posts = [];
                }
                SimpleBlogApp.prototype.readRequest = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('accept', 'application/json');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.get(location.origin + '/api/rest/simpleblog/posts/multi', opts).subscribe(function (res) {
                        _this.data = res.json();
                        // this.outParsed = this.data.split('');
                        JSON.parse(_this.data).forEach(function (items) {
                            _this.posts.push(new SimpleBlogPost(decodeURI(items[0].title), decodeURI(items[0].content), items[0].post_id, decodeURI(items[0].created)));
                        });
                    });
                };
                SimpleBlogApp.prototype.createRequest = function (data) {
                    var headers = new http_1.Headers();
                    headers.append('accept', 'application/json');
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.post(location.origin + '/api/rest/simpleblog/posts/multi', decodeURI(JSON.stringify(data)), opts)
                        .subscribe(function (res) {
                        // this.response = res.json();
                    });
                };
                SimpleBlogApp.prototype.updateRequest = function (data) {
                    var headers = new http_1.Headers();
                    headers.append('accept', 'application/json');
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.put(location.origin + '/api/rest/simpleblog/read', decodeURI(JSON.stringify(data)), opts)
                        .subscribe(function (res) {
                        // this.response = res.json();
                    });
                };
                SimpleBlogApp.prototype.deleteRequest = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('accept', 'application/json');
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.delete(location.origin + 'api/rest/simpleblog/' + id.toString(), opts)
                        .subscribe(function (res) {
                        // this.response = res.json();
                    });
                };
                SimpleBlogApp.prototype.ngOnInit = function () {
                    this.readRequest();
                };
                SimpleBlogApp.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.selectedTitle = _this.tmpTite;
                    }, 1);
                };
                SimpleBlogApp.prototype.editPostPress = function (editorReady) {
                    var _this = this;
                    if (editorReady == true) {
                        if (this.posts.some(function (i) {
                            if (_this.selectedId == i.post_id) {
                                _this.selectedIndex = _this.posts.indexOf(i);
                                return true;
                            }
                            else {
                                return false;
                            }
                        })) {
                            if (this.selectedIndex > -1) {
                                CKEDITOR.editor.setData(decodeURI(this.posts[this.selectedIndex].content));
                                this.tmpTite = decodeURI(this.posts[this.selectedIndex].title);
                                setTimeout(function () {
                                    _this.selectedTitle = _this.tmpTite;
                                }, 1);
                            }
                        }
                    }
                };
                SimpleBlogApp.prototype.editPost = function (message) {
                    this.newPostPressed = true;
                    this.isEditPost = true;
                    this.selectedId = message.id;
                    return false;
                };
                SimpleBlogApp.prototype.newPost = function (newPostPressed) {
                    this.newPostPressed = newPostPressed;
                    this.isNewPost = true;
                    return false;
                };
                SimpleBlogApp.prototype.deletePost = function () {
                    var _this = this;
                    if (!this.isEditPost) {
                        if (!this.isNewPost) {
                        }
                        else {
                            this.backToList();
                        }
                        var index;
                        this.selectedPosts.forEach(function (sp) {
                            if (sp.checked == true) {
                                _this.posts.forEach(function (p) {
                                    if (sp.id == p.post_id) {
                                        index = _this.posts.indexOf(p);
                                        _this.deleteRequest(p.post_id);
                                        _this.posts.splice(index, index);
                                        if (index == 0)
                                            _this.posts.splice(index, 1);
                                    }
                                });
                            }
                        });
                        this.selectedPosts.splice(0, this.selectedPosts.length);
                    }
                    else {
                        this.deleteRequest(this.posts[this.selectedIndex].post_id);
                        this.posts.splice(this.selectedIndex, 1);
                        this.valueRequire = false;
                        this.newPostPressed = false;
                        this.selectedIndex = -1;
                        this.selectedTitle = '';
                        this.isEditPost = false;
                    }
                    return false;
                };
                SimpleBlogApp.prototype.selectPost = function (selected, value) {
                    this.selected = selected;
                    return false;
                };
                SimpleBlogApp.prototype.resetPost = function () {
                    if (this.isEditPost) {
                        this.editPostPress(true);
                    }
                    else {
                        CKEDITOR.editor.setData('type text here..');
                        this.selectedTitle = '';
                    }
                    return false;
                };
                SimpleBlogApp.prototype.onSelect = function (message) {
                    var isNotExist = true;
                    if (this.selectedPosts.length == 0) {
                        this.selectedPosts.push(message);
                    }
                    else {
                        isNotExist = this.selectedPosts.some(function (i) {
                            if (message.id == i.id) {
                                i.checked = message.checked;
                                return true;
                            }
                            else {
                                return false;
                            }
                        });
                        if (!isNotExist) {
                            this.selectedPosts.push(message);
                            isNotExist = true;
                        }
                    }
                    this.selectedPosts.forEach(function (i) {
                    });
                    this.selected = this.selectedPosts.some(function (i) {
                        if (i.checked == true)
                            return true;
                        else
                            return false;
                    });
                };
                SimpleBlogApp.prototype.savePost = function (title) {
                    if (!this.isEditPost) {
                        var data = CKEDITOR.editor.getData();
                        if ((data.length > 0) && !(title.value == null)) {
                            this.valueRequire = false;
                            this.newPostPressed = false;
                            this.selectedIndex = -1;
                            this.isNewPost = false;
                            this.posts.push(new SimpleBlogPost(title.value, data));
                            this.createRequest(this.posts[this.posts.length - 1]);
                        }
                        else {
                            this.valueRequire = true;
                        }
                    }
                    else {
                        var data = CKEDITOR.editor.getData();
                        if ((data.length > 0) && !(title.value == null)) {
                            this.posts[this.selectedIndex].title = title.value;
                            this.posts[this.selectedIndex].content = data;
                            this.updateRequest(this.posts[this.selectedIndex]);
                            this.valueRequire = false;
                            this.newPostPressed = false;
                            this.selectedIndex = -1;
                            this.selectedTitle = '';
                            this.isEditPost = false;
                        }
                        else
                            this.valueRequire = true;
                    }
                    return false;
                };
                SimpleBlogApp.prototype.backToList = function () {
                    this.valueRequire = false;
                    this.newPostPressed = false;
                    if (this.isEditPost) {
                        this.valueRequire = false;
                        this.newPostPressed = false;
                        this.selectedIndex = -1;
                        this.selectedTitle = '';
                        this.isEditPost = false;
                        this.isNewPost = false;
                    }
                };
                SimpleBlogApp = __decorate([
                    core_1.Component({
                        selector: 'simple-blog',
                        directives: [common_1.FORM_DIRECTIVES, CKEDITOR, PostRow],
                        template: "<div class=\"ui container segment\">\n    <div *ngIf=\"!newPostPressed\">\n        <div class=\"ui container\">\n            <div class=\" ui clearing segment\">\n                <h1 class=\"ui header\">Simple Blog\n                    <div *ngIf=\"selected\">\n                        <button (click)=\"deletePost()\" class=\"ui right floated primary button\">Delete</button>\n                    </div>\n                    <button (click)=\"newPost(true)\" class=\"ui right floated primary button\">Add New Post</button>\n                </h1>\n            </div>\n        </div>\n        <table class=\"ui striped selectable celled table\">\n            <thead>\n            <tr>\n                <th></th>\n                <th>Title</th>\n                <th>Created at</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tr (select)=\"onSelect($event)\" (edit)=\"editPost($event)\" *ngFor=\"let post of posts\" [blog-tr]=\"post\"></tr>\n        </table>\n    </div>\n    <div *ngIf=\"newPostPressed\">\n        <div class=\"ui container\">\n            <div class=\" ui clearing segment\">\n                <h1 class=\"ui header\">Simple Blog - Edit\n                    <button (click)=\"savePost(title)\" class=\"ui right floated primary button\">Save</button>\n                    <button (click)=\"deletePost()\" class=\"ui right floated primary button\">Delete</button>\n                    <button (click)=\"resetPost()\" class=\"ui right floated primary button\">Reset</button>\n                    <button (click)=\"backToList()\" class=\"ui right floated primary button\">Back</button>\n                </h1>\n            </div>\n            <form #editForm=\"ngForm\" class=\"ui form\">\n                <div ngControlGroup=\"name\" #name=\"ngForm\">\n                    <label><h3>Title*</h3></label><input ngControl=\"title\" [(ngModel)]=\"selectedTitle\" type=\"text\"\n                                                         #title=\"ngForm\">\n                </div>\n            </form>\n            <h3>Description*</h3>\n            <div *ngIf=\"valueRequire\">\n                <h3>Please, fill the required fields </h3>\n                <p></p>\n            </div>\n            <CKEDITOR (editorReady)=\"editPostPress($event)\"></CKEDITOR>\n        </div>\n    </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SimpleBlogApp);
                return SimpleBlogApp;
            }());
            platform_browser_dynamic_1.bootstrap(SimpleBlogApp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map