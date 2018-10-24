(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AkNAKIEJgGIESgGAAAkNIgEERIgEEK");
	this.shape.setTransform(27,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEOAAQAABwhPBPQhPBPhwAAQgDAAgFAAQhqgDhMhMQhMhMgDhpQAAgFAAgFQAAhvBPhPQBPhPBvAAQBwAABPBPQBOBOABBuQAAACAAAAg");
	this.shape_1.setTransform(27,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIEOIAEkKIESgGIAAACQAABwhPBPQhPBPhwAAIgIAAgAgIEOQhqgDhMhMQhMhLgChqIEIgGIgEEKIAAAAgAkMAKIgBgKQAAhvBPhPQBPhPBvAAQBwAABPBPQBOBOABBuIkSAGIAEkRIgEERIkIAGIAAAAgAgEAEgAEOgCIAAAAg");
	this.shape_2.setTransform(27,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.target, new cjs.Rectangle(-1,-1,56,56), null);


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.parent.removeChild(this);
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACOAAQAAA7gqApQgpAqg7AAQg6AAgpgqQgqgpAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6g");
	this.shape.setTransform(1.1,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjBkQgqgqAAg6QAAg6AqgpQAqgpA5AAQA7AAApApQApApAAA6QAAA6gpAqQgpAqg7AAQg5AAgqgqg");
	this.shape_1.setTransform(1.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#140000").ss(1,1,1).p("AiSAAQAAg8ArgrQArgrA8AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg8AAgrgrQgrgrAAg9g");
	this.shape_2.setTransform(1.1,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0000").s().p("AhnBoQgrgrAAg9QAAg8ArgrQAsgrA7AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg7AAgsgrg");
	this.shape_3.setTransform(1.1,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#270000").ss(1,1,1).p("AiYAAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtQgtgtAAg/g");
	this.shape_4.setTransform(1.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180000").s().p("AhqBrQgugsABg/QgBg+AugtQAsgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAsQgtAug/gBQg+ABgsgug");
	this.shape_5.setTransform(1.1,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#3B0000").ss(1,1,1).p("AidAAQAAhAAugvQAvguBAAAQBCAAAuAuQAuAvAABAQAABCguAuQguAuhCAAQhAAAgvguQguguAAhCg");
	this.shape_6.setTransform(1.1,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#230000").s().p("AhvBwQgugvAAhBQAAhAAuguQAvgvBAAAQBCAAAtAvQAvAuAABAQAABBgvAvQgtAuhCAAQhAAAgvgug");
	this.shape_7.setTransform(1.1,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4E0000").ss(1,1,1).p("AiiAAQAAhDAvgwQAwgvBDAAQBDAAAwAvQAwAwAABDQAABDgwAwQgwAwhDAAQhDAAgwgwQgvgwAAhDg");
	this.shape_8.setTransform(1.1,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F0000").s().p("AhzBzQgvgwAAhDQAAhDAvgwQAwgvBDAAQBDAAAwAvQAwAwAABDQAABDgwAwQgwAwhDAAQhDAAgwgwg");
	this.shape_9.setTransform(1.1,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#620000").ss(1,1,1).p("AioAAQAAhFAygxQAxgyBFAAQBGAAAxAyQAyAxAABFQAABGgyAxQgxAyhGAAQhFAAgxgyQgygxAAhGg");
	this.shape_10.setTransform(1.1,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B0000").s().p("Ah2B3QgygxAAhGQAAhFAygxQAxgyBFAAQBGAAAxAyQAyAxAABFQAABGgyAxQgxAyhGAAQhFAAgxgyg");
	this.shape_11.setTransform(1.1,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#760000").ss(1,1,1).p("AitAAQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzQgzgzAAhIg");
	this.shape_12.setTransform(1.1,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#470000").s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_13.setTransform(1.1,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#890000").ss(1,1,1).p("AizAAQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A0Qg0A1hLAAQhJAAg1g1Qg1g0AAhLg");
	this.shape_14.setTransform(1.1,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#520000").s().p("Ah+B/Qg1g1ABhKQgBhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKgBQhJABg1g1g");
	this.shape_15.setTransform(1.1,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9D0000").ss(1,1,1).p("Ai4AAQAAhMA2g2QA2g2BMAAQBMAAA3A2QA2A2AABMQAABMg2A3Qg3A2hMAAQhMAAg2g2Qg2g3AAhMg");
	this.shape_16.setTransform(1.1,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E0000").s().p("AiCCDQg2g3AAhMQAAhMA2g2QA3g2BLAAQBNAAA2A2QA2A2AABMQAABMg2A3Qg2A2hNAAQhLAAg3g2g");
	this.shape_17.setTransform(1.1,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B10000").ss(1,1,1).p("Ai9AAQAAhOA3g4QA4g3BOAAQBPAAA4A3QA3A4AABOQAABPg3A4Qg4A3hPAAQhOAAg4g3Qg3g4AAhPg");
	this.shape_18.setTransform(1.1,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6A0000").s().p("AiFCGQg4g3AAhPQAAhOA4g4QA3g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A3Qg4A4hPAAQhOAAg3g4g");
	this.shape_19.setTransform(1.1,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C40000").ss(1,1,1).p("AjDAAQAAhQA5g6QA6g5BQAAQBRAAA5A5QA6A6AABQQAABRg6A5Qg5A6hRAAQhQAAg6g6Qg5g5AAhRg");
	this.shape_20.setTransform(1.1,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#760000").s().p("AiKCKQg5g5AAhRQAAhQA5g6QA6g5BQAAQBRAAA5A5QA6A6AABQQAABRg6A5Qg5A6hRAAQhQAAg6g6g");
	this.shape_21.setTransform(1.1,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D80000").ss(1,1,1).p("AjIAAQAAhSA6g8QA8g6BSAAQBTAAA7A6QA7A8AABSQAABTg7A7Qg7A7hTAAQhSAAg8g7Qg6g7AAhTg");
	this.shape_22.setTransform(1.1,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#810000").s().p("AiOCOQg6g7AAhTQAAhSA6g8QA8g6BSAAQBTAAA7A6QA7A8AABSQAABTg7A7Qg7A7hTAAQhSAAg8g7g");
	this.shape_23.setTransform(1.1,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#EB0000").ss(1,1,1).p("AjOAAQAAhVA9g8QA8g9BVAAQBVAAA9A9QA9A8AABVQAABVg9A9Qg9A9hVAAQhVAAg8g9Qg9g9AAhVg");
	this.shape_24.setTransform(1.1,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8D0000").s().p("AiRCSQg9g9AAhVQAAhVA9g8QA8g9BVAAQBVAAA9A9QA9A8AABVQAABVg9A9Qg9A9hVAAQhVAAg8g9g");
	this.shape_25.setTransform(1.1,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(1,1,1).p("ADUAAQAABYg+A+Qg+A+hYAAQhXAAg+g+Qg+g+AAhYQAAhXA+g+QA+g+BXAAQBYAAA+A+QA+A+AABXg");
	this.shape_26.setTransform(1.1,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AiVCWQg+g+AAhYQAAhXA+g+QA+g+BXAAQBYAAA+A+QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape_27.setTransform(1.1,1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#EF0000").ss(1,1,1).p("AjRAAQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+Qg9g9AAhXg");
	this.shape_28.setTransform(1.2,1.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8F0000").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");
	this.shape_29.setTransform(1.2,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DF0000").ss(1,1,1).p("AjPAAQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9Qg9g9AAhWg");
	this.shape_30.setTransform(1.1,1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#860000").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9g");
	this.shape_31.setTransform(1.1,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CF0000").ss(1,1,1).p("AjMAAQAAhUA7g8QA9g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg9g8Qg7g8AAhVg");
	this.shape_32.setTransform(1.2,1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C0000").s().p("AiRCRQg7g8gBhVQABhUA7g8QA9g8BUAAQBVAAA7A8QA+A8gBBUQABBVg+A8Qg7A8hVAAQhUAAg9g8g");
	this.shape_33.setTransform(1.2,1.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BF0000").ss(1,1,1).p("AjKAAQAAhTA7g8QA8g7BTAAQBUAAA7A7QA8A8AABTQAABUg8A7Qg7A8hUAAQhTAAg8g8Qg7g7AAhUg");
	this.shape_34.setTransform(1.1,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#730000").s().p("AiPCPQg7g7AAhUQAAhTA7g8QA8g7BTAAQBUAAA7A7QA8A8AABTQAABUg8A7Qg7A8hUAAQhTAAg8g8g");
	this.shape_35.setTransform(1.1,1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#AF0000").ss(1,1,1).p("AjIAAQAAhSA6g7QA7g7BTAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhTAAg7g7Qg6g7AAhTg");
	this.shape_36.setTransform(1.2,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#690000").s().p("AiOCOQg6g7AAhTQAAhSA6g7QA8g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg8g7g");
	this.shape_37.setTransform(1.2,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#9F0000").ss(1,1,1).p("AjGAAQAAhRA6g7QA7g6BRAAQBSAAA6A6QA7A7AABRQAABSg7A6Qg6A7hSAAQhRAAg7g7Qg6g6AAhSg");
	this.shape_38.setTransform(1.1,1.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#600000").s().p("AiMCMQg6g6AAhSQAAhRA6g7QA7g6BRAAQBSAAA6A6QA7A7AABRQAABSg7A6Qg6A7hSAAQhRAAg7g7g");
	this.shape_39.setTransform(1.1,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#8F0000").ss(1,1,1).p("AjEAAQAAhQA5g6QA6g5BRAAQBRAAA6A5QA6A6AABQQAABRg6A6Qg6A5hRAAQhRAAg6g5Qg5g6AAhRg");
	this.shape_40.setTransform(1.2,1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#560000").s().p("AiKCLQg5g6gBhRQABhQA5g6QA5g5BRAAQBRAAA6A5QA5A6AABQQAABRg5A6Qg6A5hRAAQhRAAg5g5g");
	this.shape_41.setTransform(1.2,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#800000").ss(1,1,1).p("AjBAAQAAhPA5g5QA5g5BPAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_42.setTransform(1.1,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D0000").s().p("AiICJQg5g5AAhQQAAhPA5g5QA5g5BPAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAQhPAAg5g5g");
	this.shape_43.setTransform(1.1,1.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#700000").ss(1,1,1).p("Ai/AAQAAhPA4g4QA4g4BPAAQBPAAA4A4QA5A4AABPQAABPg5A4Qg4A5hPAAQhPAAg4g5Qg4g4AAhPg");
	this.shape_44.setTransform(1.2,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#430000").s().p("AiHCHQg4g4AAhPQAAhPA4g4QA4g4BPAAQBPAAA4A4QA5A4AABPQAABPg5A4Qg4A5hPAAQhPAAg4g5g");
	this.shape_45.setTransform(1.2,1.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#600000").ss(1,1,1).p("Ai9AAQAAhOA4g3QA4g4BNAAQBOAAA4A4QA4A3AABOQAABPg4A3Qg4A4hOAAQhNAAg4g4Qg4g3AAhPg");
	this.shape_46.setTransform(1.1,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#390000").s().p("AiFCGQg4g3AAhPQAAhOA4g3QA4g3BNgBQBOABA4A3QA4A3AABOQAABPg4A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_47.setTransform(1.1,1.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#500000").ss(1,1,1).p("Ai7AAQAAhNA3g3QA4g2BMAAQBNAAA3A2QA4A3AABNQAABNg4A3Qg3A3hNAAQhMAAg4g3Qg3g3AAhNg");
	this.shape_48.setTransform(1.2,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#300000").s().p("AiECEQg3g3AAhNQAAhNA3g3QA4g2BMAAQBNAAA3A2QA4A3gBBNQABBNg4A3Qg3A3hNAAQhMAAg4g3g");
	this.shape_49.setTransform(1.2,1.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#400000").ss(1,1,1).p("Ai4AAQAAhMA2g2QA3g2BLAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhLAAg3g2Qg2g2AAhNg");
	this.shape_50.setTransform(1.1,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#260000").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA3g2BLAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhLAAg3g2g");
	this.shape_51.setTransform(1.1,1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#300000").ss(1,1,1).p("Ai2AAQAAhLA1g2QA2g1BLAAQBLAAA2A1QA2A2AABLQAABMg2A1Qg2A2hLAAQhLAAg2g2Qg1g1AAhMg");
	this.shape_52.setTransform(1.2,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D0000").s().p("AiBCBQg1g1AAhMQAAhLA1g2QA2g1BLAAQBMAAA1A1QA2A2AABLQAABMg2A1Qg1A2hMAAQhLAAg2g2g");
	this.shape_53.setTransform(1.2,1.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#200000").ss(1,1,1).p("Ai0AAQAAhKA1g1QA1g0BKAAQBLAAA0A0QA2A1AABKQAABLg2A1Qg0A0hLAAQhKAAg1g0Qg1g1AAhLg");
	this.shape_54.setTransform(1.1,1.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#130000").s().p("Ah/B/Qg1g0AAhLQAAhKA1g1QA1g1BKAAQBLAAA0A1QA2A1AABKQAABLg2A0Qg0A1hLAAQhKAAg1g1g");
	this.shape_55.setTransform(1.1,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#100000").ss(1,1,1).p("AiyAAQAAhJA0g0QA1g0BJAAQBKAAAzA0QA2A0AABJQAABKg2A0QgzA0hKAAQhJAAg1g0Qg0g0AAhKg");
	this.shape_56.setTransform(1.2,1.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0A0000").s().p("Ah+B+Qg0g0AAhKQAAhJA0g0QA1g0BJAAQBKAAAzA0QA1A0AABJQAABKg1A0QgzA0hKAAQhJAAg1g0g");
	this.shape_57.setTransform(1.2,1.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("ACwAAQAABJg0A0QgzAzhJAAQhIAAg0gzQgzg0AAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQA0A0AABIg");
	this.shape_58.setTransform(1.1,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ah8B8QgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQA0A0AABIQAABJg0AzQgzA0hJAAQhIAAg0g0g");
	this.shape_59.setTransform(1.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.5,30.3,30.3);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAgEIAAAJAgJgEQAFAAAEAAQADAAADAAQACAAACAA");
	this.shape.setTransform(1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AAAAFIAAgJIAAAJIgJAAIAAgJIAJAAIAGAAIADAAIAAAJg");
	this.shape_1.setTransform(1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exit, new cjs.Rectangle(-1,-1,3.9,3.1), null);


(lib.enemy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah4B4QgxgxAAhHQAAhFAxgzQAzgxBFAAQBHAAAxAxQAyAzAABFQAABHgyAxQgxAyhHAAQhFAAgzgyg");
	this.shape.setTransform(17,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.enemy, new cjs.Rectangle(0,0,34,34), null);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAQAyIgfAAIAAhjIAfAAg");
	this.shape.setTransform(0.2,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPBUIAAhjIgXAAIAmhEIAnBEIgWAAIggAAIAgAAIAABjg");
	this.shape_1.setTransform(0.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullet, new cjs.Rectangle(-3.8,-10.2,7.9,17.9), null);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.exit = new lib.exit();
	this.exit.name = "exit";
	this.exit.parent = this;
	this.exit.setTransform(39.2,0.5,1,1,0,0,0,1,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAEmNQAXABAXACQCEAPBjBjQB1B0AACkQAAClh1B0Qh0B1ilAAQikAAh0h1Qh1h0AAilQAAikB1h0QBohoCPgLQAJgBAKAAAgGmCIAAGP");
	this.shape.setTransform(39.8,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AkYEZQh0h1gBikQABikB0h0QBohoCPgLIASgBIAAAKIAJAAIAKAAIAAgLQAXABAXACQCEAPBjBjQB1B0gBCkQABCkh1B1Qh1B1ikgBQikABh0h1gAgGANIAAmPg");
	this.shape_1.setTransform(39.8,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAEmNQCiACBzBzQB1B0AACkQAAClh1B0Qh0B1ilAAQikAAh0h1Qh1h0AAilQAAikB1h0QBvhvCbgFAgGmCIAAGP");
	this.shape_2.setTransform(39.8,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AkYEZQh0h1gBikQABikB0h0QBvhvCagFIAAAKIAJAAIAKAAIAAgLQCiACBzBzQB1B0gBCkQABCkh1B1Qh1B1ikgBQikABh0h1gAgGANIAAmPg");
	this.shape_3.setTransform(39.8,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993399").s().p("AkYEZQh0h1gBikQABikB0h0QBvhvCagFIAAAKIAJAAIAKAAIAAgLQCiACBzBzQB1B0gBCkQABCkh1B1Qh1B1ikgBQikABh0h1gAgGANIAAmPg");
	this.shape_4.setTransform(39.8,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AkYEZQh0h1gBikQABikB0h0QBvhvCagFIAAAKIAJAAIAKAAIAAgLQCiACBzBzQB1B0gBCkQABCkh1B1Qh1B1ikgBQikABh0h1gAgGANIAAmPg");
	this.shape_5.setTransform(39.8,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.exit}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.exit}]},1).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.exit}]},1).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.exit}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81.5,81.5);


// stage content:
(lib.missilecommandtechdemo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Missile Command style tech-demo
		//WiP 2018
		//hold spacebar to shoot, drag target with mouse to aim
		//use '1-4' number keys (non-numpad) to change firing mode.
		
		var home = this;
		
		//arrays containing active object referances.
		var liveAmmoData = [];
		var liveExplosionData = [];
		
		//VARious fireMode VARiables 😁
		var fireMode = "auto";
		var shotsFired = 0;
		var tickAutoFire = 0;
		var shotSpeed = 7
		var reloaded = true
		
		//physics
		//coded with help from ♥♥ http://burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ ♥♥
		var movingEnemy = {
			position: {
				x: Math.random() * (550 - 70) + 60,
				y: -20
			},
			velocity: {
				x: Math.random() * 4 - 2,
				y: 0
			},
			mass: Math.random() / 3 + 0.2, //or, weight.
			radius: 17.5,
			restitution: -0.7
		};
		
		var Cd = 1.55; // coefficient of drag, or air resistance of a cube
		var rho = 1.22; // or, atmosphere density.
		
		var A = 0.6; // or, area fighting angainst the above density, calculated frontal silhouette of the object
		var ag = 4.81 // or, gravity.
		home.enemy1.x = movingEnemy.position.x;
		home.enemy1.y = movingEnemy.position.y;
		
		
		function adjustAngle(obj1, obj2) {
			//coded with help from ♥♥ http://www.somethinghitme.com/2013/11/13/snippets-i-always-forget-movement/ ♥♥
			//find distance between two objects
			var x = obj1.x - obj2.x;
			var y = obj1.y - obj2.y;
		
			//trigonometry will give you the angle in radians
			var angle = Math.atan2(y, x);
			//transform it to degrees
			angle = (angle/ Math.PI) * 180 ;
			//align angle to canvas standarts- so 0deg is UP
			angle = angle - 90;
			return angle;
		
		}
		
		home.target.addEventListener("pressmove", dragFunc);
		window.addEventListener("keydown", fire);
		
		
		function dragFunc(evt) {
			//get mouse cursor coordinates
			var p = home.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
			//readjust turret angle
			home.player.rotation = adjustAngle(home.player, home.target);
		}
		
		createjs.Ticker.addEventListener("tick", tick);
		
		function fire(evt) {
			//find edge of circle global coordinates
			var point = home.player.localToGlobal(home.player.exit.x, home.player.exit.y)
			//reset deviation from alternating fireModes
			var deviation = {
				x: 0,
				y: 0
			};
			//debug change firemode
			switch (evt.keyCode) {
				case 49://1
				fireMode = "auto"
				home.player.gotoAndStop(0);
				break;
				case 50://2
				fireMode = "flak"
				home.player.gotoAndStop(1);
		
				break;
				case 51://3
				fireMode = "shotgun"
				home.player.gotoAndStop(2);
		
				break;
				case 52://4
				fireMode = "railgun"
				home.player.gotoAndStop(3);
		
				break;
			}
			switch (fireMode) {
				case "auto":
					//hold spacebar, if less than 7 active bullets are on screen, add bullets.
					if (evt.keyCode == 32 && liveAmmoData.length <= 6 && tickAutoFire > 1) {
						newBullet(point, deviation)
						tickAutoFire = 0;
					}
					break;
				case "flak":
					//coded with help from ♥♥ https://programming.guide/random-point-within-circle.html ♥♥
					//generate random deviation around target, distribute bullets
					//semi-automatic. only fires with 0 bullets active.
					if (evt.keyCode == 32 && liveAmmoData.length == 0) {
						for (i = 0; i < 6; i++) {
							//point on a circle's radius
							var a = Math.random() * 2 * Math.PI;
							// radius' length. change the integer to effect spread.
							var r = 80 * Math.sqrt(Math.random())
							deviation = {
								x: r * Math.cos(a),
								y: r * Math.sin(a)
							};
							newBullet(point, deviation)
						}
					}
					break;
				case "shotgun":
					//shoots in a line formation, change array values to manipulate spread and shot amount
					//semi-automatic. only fires with 0 bullets active.
		
					var spread = [-50, -25, 0, 25, 50]
					if (evt.keyCode == 32 && liveAmmoData.length == 0) {
						for (i = 0; i < spread.length; i++) {
							deviation.x = spread[i]
							deviation.y = spread[i]
							newBullet(point, deviation)
						}
					}
					break;
				case "railgun":
					//fast moving bullet, takes time between shots
					if (evt.keyCode == 32 && liveAmmoData.length == 0 && reloaded == true) {
						shotSpeed = 30
						newBullet(point, deviation)
						reloaded = false;
						setTimeout(function () {
							reloaded = true
							//reset shot speed to base for when fireMode changes between reloads
							shotSpeed = 7;
		
						}, 1000)
					}
			}
		}
		
		function tick(e) {
			tickAutoFire++
			//enemy physics
			//drag calculation
			var Fy = -0.5 * Cd * A * rho * movingEnemy.velocity.y * movingEnemy.velocity.y * movingEnemy.velocity.y / Math.abs(movingEnemy.velocity.y);
			var Fx = -0.5 * Cd * A * rho * movingEnemy.velocity.x * movingEnemy.velocity.x * movingEnemy.velocity.x / Math.abs(movingEnemy.velocity.x);
		
			Fy = (isNaN(Fy) ? 0 : Fy)
			Fx = (isNaN(Fx) ? 0 : Fx);
		
			//accleration	
			var ay = ag + (Fy / movingEnemy.mass)
			var ax = Fx / movingEnemy.mass;
		
		
			movingEnemy.velocity.y += ay / 24
			movingEnemy.velocity.x += ax / 24
		
			home.enemy1.y += movingEnemy.velocity.y / 24 * 100;
			home.enemy1.x += movingEnemy.velocity.x / 24 * 100;
		
			//bottom stage collision
			if (home.enemy1.y > 390) {
				replaceEnemy()
			}
			//side collisions
			if (home.enemy1.x > 550 - movingEnemy.radius) {
				movingEnemy.velocity.x *= movingEnemy.restitution;
				//ball.position.x = width - ball.radius;
			}
			if (home.enemy1.x < movingEnemy.radius) {
				movingEnemy.velocity.x *= movingEnemy.restitution;
				//ball.position.x = ball.radius;
			}
		
		
			//bullet movements and collisions
			for (i = 0; i < liveAmmoData.length; i++) {
		
				var bullet = home.getChildByName("bullet" + liveAmmoData[i].name.substr(6));
				//move bullet across shot angle.
				if (bullet) {
					//-= sets direction ; cos and sin are for horizontal and vertical movement respectively;
					//+90 to rotation zeroes the adjustment done by adjustAngle();
					// *math.PI/180 reverts to radians, needed for cos and sin to function properly
					bullet.x -= shotSpeed * Math.cos((bullet.rotation + 90) * Math.PI / 180);
					bullet.y -= shotSpeed * Math.sin((bullet.rotation + 90) * Math.PI / 180);
		
					//collision with enemy circle, pre-explosion
					//research hitTest on your own ;) acts as intersect function but differently
					var pt = bullet.localToLocal(0, 0, home.enemy1)
					if (home.enemy1.hitTest(pt.x, pt.y)) {
						replaceEnemy()
						removeBullet(bullet, i)
		
					}
		
					//stage exit. remove the bullet
					if (bullet.x > 550 || bullet.x < 0 || bullet.y < 0) {
						removeBullet(bullet, i)
					}
		
					//explode on target
					if (bullet.x - liveAmmoData[i].finX <= 5 && bullet.y - liveAmmoData[i].finY <= 5) {
						//first document name and time
						var explosionData = {
							name: "explosion" + bullet.name.substr(6),
							timestamp: e.timeStamp
						};
						liveExplosionData.push(explosionData)
						//add explosion to stage and give starting values
						var explosion = new lib.explosion;
						explosion.x = bullet.x;
						explosion.y = bullet.y;
						explosion.name = explosionData.name;
						home.addChild(explosion);
						//remove the bullet that exploded
						removeBullet(bullet, i)
					}
				}
		
		
			}
			//explosion collision with enemy
			for (j = 0; j < liveExplosionData.length; j++) {
				var explosion = home.getChildByName("explosion" + liveExplosionData[j].name.substr(9));
				//is ▲this▲ explosion on stage?
				if (explosion) {
					//is it touching an enemy?
					if (intersect(explosion, home.enemy1)) {
						replaceEnemy()
					}
				}
				//manage active explosions array length.
				//since explosion library object removes itself from stage after 1.2 seconds,
				//just splice the referance out the array after 1.2 seconds passed between timestamps.
				if (liveExplosionData[i].timestamp + 1200 <= e.timeStamp) {
					liveExplosionData.splice(j, 1)
				}
			}
		
		}
		
		function newBullet(point, deviation) {
			//register bullet data to array
			var bulletData = {
				x: point.x,
				y: point.y,
				finX: home.target.x + deviation.x,
				finY: home.target.y - deviation.y,
				rotation: null,
				name: "bullet" + shotsFired
			};
			//apply rotation after deviation and register value.
			deviation.x = bulletData.finX;
			deviation.y = bulletData.finY;
			//adjustAngle uses two objects, hence the squirly two-step implementation of rotation.
			bulletData.rotation = adjustAngle(home.player, deviation);
			liveAmmoData.push(bulletData)
			shotsFired++
		
			//create new bullet		
			var bullet = new lib.bullet;
			//place bullet at edge of circle, with same rotation
			bullet.x = bulletData.x;
			bullet.y = bulletData.y;
			bullet.rotation = bulletData.rotation;
			bullet.name = bulletData.name
			home.addChild(bullet)
		}
		
		
		function removeBullet(bullet, index) {
			//from stage
			home.removeChild(bullet);
			//from array indexing it's data
			liveAmmoData.splice(index, 1)
		}
		
		function replaceEnemy() {
			//re-randoimize randomizeable stats
			movingEnemy.velocity.y = 0;
			movingEnemy.velocity.x = Math.random() * 4 - 2;
			movingEnemy.mass = Math.random() / 3 + 0.2
			//x in stage limits, keeping in mind enemy's width of 35px, doubled to 70 for effect.
			home.enemy1.x = Math.random() * (550 - 70) + 60;
			//y above top of stage to make enemy look like falling and not popping into existance.
			home.enemy1.y = -20
		}
		
		
		//basic intersect function
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.enemy1 = new lib.enemy();
	this.enemy1.name = "enemy1";
	this.enemy1.parent = this;
	this.enemy1.setTransform(77.2,97.8,1,1,0,0,0,17,17);

	this.target = new lib.target();
	this.target.name = "target";
	this.target.parent = this;
	this.target.setTransform(279.1,189.7,1,1,0,0,0,27,27);

	this.player = new lib.player();
	this.player.name = "player";
	this.player.parent = this;
	this.player.setTransform(291.9,399.8,1,1,0,0,0,39.8,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player},{t:this.target},{t:this.enemy1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335.2,280.8,271.9,359.1);
// library properties:
lib.properties = {
	id: '08A572F14A070D45942605A7EE00E663',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08A572F14A070D45942605A7EE00E663'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;