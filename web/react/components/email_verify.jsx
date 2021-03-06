// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.

module.exports = React.createClass({
    handleResend: function() {
        window.location.href = window.location.href + "&resend=true"
    },
    render: function() {
        var title = "";
        var body = "";
        var resend = "";
        if (this.props.isVerified === "true") {
            title = config.SiteName + " Email Verified";
            body = <p>Your email has been verified! Click <a href={this.props.teamURL + "?email=" + this.props.userEmail}>here</a> to log in.</p>;
        } else {
            title = config.SiteName + " Email Not Verified";
            body = <p>Please verify your email address. Check your inbox for an email.</p>;
            resend = <button onClick={this.handleResend} className="btn btn-primary">Resend Email</button>
        }

        return (
            <div className="col-sm-offset-4 col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{ title }</h3>
                    </div>
                    <div className="panel-body">
                        { body }
                        { resend }
                    </div>
                </div>
            </div>
        );
    }
});
