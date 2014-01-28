/**
 * global converter
 * exported Comment
 * @jsx React.DOM
 */
var Comment = React.createClass({

    render: function () {

        var rawMarkup = converter.makeHtml(this.props.children.toString());

		/* jshint ignore:start */
        return (
            <div className="comment">
                <div className="comment__author">{ this.props.author }</div>
                <div className="comment__text" dangerouslySetInnerHTML={{__html: rawMarkup}}/>
            </div>
        );
		/* jshint ignore:end */

    }

});
