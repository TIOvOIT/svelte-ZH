import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, E as text, l as space, c as claim_element, a as children, F as claim_text, b as detach_dev, p as claim_space, g as set_style, f as attr_dev, Q as toggle_class, h as add_location, T as listen_dev, j as insert_dev, k as append_dev, n as noop } from './index.4e52d202.js';

/* src\components\Repl\InputOutputToggle.svelte generated by Svelte v3.12.0 */

const file = "src\\components\\Repl\\InputOutputToggle.svelte";

function create_fragment(ctx) {
	var label, span0, t0, t1, input, t2, span1, t3, dispose;

	const block = {
		c: function create() {
			label = element("label");
			span0 = element("span");
			t0 = text("input");
			t1 = space();
			input = element("input");
			t2 = space();
			span1 = element("span");
			t3 = text("output");
			this.h();
		},

		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", { class: true }, false);
			var label_nodes = children(label);

			span0 = claim_element(label_nodes, "SPAN", { style: true, class: true }, false);
			var span0_nodes = children(span0);

			t0 = claim_text(span0_nodes, "input");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(label_nodes);

			input = claim_element(label_nodes, "INPUT", { type: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach_dev);
			t2 = claim_space(label_nodes);

			span1 = claim_element(label_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t3 = claim_text(span1_nodes, "output");
			span1_nodes.forEach(detach_dev);
			label_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			set_style(span0, "text-align", "right");
			attr_dev(span0, "class", "svelte-cpvm30");
			toggle_class(span0, "active", !ctx.checked);
			add_location(span0, file, 23, 1, 431);
			attr_dev(input, "type", "checkbox");
			attr_dev(input, "class", "svelte-cpvm30");
			add_location(input, file, 24, 1, 502);
			attr_dev(span1, "class", "svelte-cpvm30");
			toggle_class(span1, "active", ctx.checked);
			add_location(span1, file, 25, 1, 541);
			attr_dev(label, "class", "input-output-toggle svelte-cpvm30");
			add_location(label, file, 22, 0, 393);
			dispose = listen_dev(input, "change", ctx.input_change_handler);
		},

		m: function mount(target, anchor) {
			insert_dev(target, label, anchor);
			append_dev(label, span0);
			append_dev(span0, t0);
			append_dev(label, t1);
			append_dev(label, input);

			input.checked = ctx.checked;

			append_dev(label, t2);
			append_dev(label, span1);
			append_dev(span1, t3);
		},

		p: function update(changed, ctx) {
			if (changed.checked) {
				toggle_class(span0, "active", !ctx.checked);
			}

			if (changed.checked) input.checked = ctx.checked;

			if (changed.checked) {
				toggle_class(span1, "active", ctx.checked);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(label);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { checked } = $$props;

	const writable_props = ['checked'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<InputOutputToggle> was created with unknown prop '${key}'`);
	});

	function input_change_handler() {
		checked = this.checked;
		$$invalidate('checked', checked);
	}

	$$self.$set = $$props => {
		if ('checked' in $$props) $$invalidate('checked', checked = $$props.checked);
	};

	$$self.$capture_state = () => {
		return { checked };
	};

	$$self.$inject_state = $$props => {
		if ('checked' in $$props) $$invalidate('checked', checked = $$props.checked);
	};

	return { checked, input_change_handler };
}

class InputOutputToggle extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["checked"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "InputOutputToggle", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.checked === undefined && !('checked' in props)) {
			console.warn("<InputOutputToggle> was created without expected prop 'checked'");
		}
	}

	get checked() {
		throw new Error("<InputOutputToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checked(value) {
		throw new Error("<InputOutputToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { InputOutputToggle as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRPdXRwdXRUb2dnbGUuY2Y5YTFjZTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JlcGwvSW5wdXRPdXRwdXRUb2dnbGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGxldCBjaGVja2VkO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuaW5wdXQtb3V0cHV0LXRvZ2dsZSB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4IDFmcjtcclxuXHRcdGdyaWQtZ2FwOiAwLjVlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNDJweDtcclxuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQpO1xyXG5cdH1cclxuXHJcblx0aW5wdXQgeyBkaXNwbGF5OiBibG9jayB9XHJcblx0c3BhbiB7IGNvbG9yOiAjY2NjIH1cclxuXHQuYWN0aXZlIHsgY29sb3I6ICM1NTUgfVxyXG48L3N0eWxlPlxyXG5cclxuPGxhYmVsIGNsYXNzPVwiaW5wdXQtb3V0cHV0LXRvZ2dsZVwiPlxyXG5cdDxzcGFuIGNsYXNzOmFjdGl2ZT17IWNoZWNrZWR9IHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj5pbnB1dDwvc3Bhbj5cclxuXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgYmluZDpjaGVja2VkPlxyXG5cdDxzcGFuIGNsYXNzOmFjdGl2ZT17Y2hlY2tlZH0+b3V0cHV0PC9zcGFuPlxyXG48L2xhYmVsPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBdUJxQixLQUFDLE9BQU87Ozs7OztxQ0FFUixPQUFPOzs7Ozs7Ozs7Ozs7Ozt1QkFEQyxPQUFPOzs7Ozs7Ozs7a0NBRGYsS0FBQyxPQUFPOzs7NENBQ0EsT0FBTzs7O3NDQUNmLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeEJwQixNQUFJLG1CQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==