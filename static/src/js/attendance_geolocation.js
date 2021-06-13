odoo.define('hr_attendance_geolocation.attendances_geolocation', function (require) {
    "use strict";

    const MyAttendances = require('hr_attendance.my_attendances');

    MyAttendances.include({
        update_attendance: function () {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._manual_attendance.bind(this), this._getPositionError, options);
            }
        },
        _check_attendance: function (position) {
            this._rpc({
                model: 'hr.employee',
                method: 'check_attendance',
                args: [[this.employee.id], 'hr_attendance.hr_attendance_action_my_attendances', null, [position.coords.latitude, position.coords.longitude]],
            })
            .then(function(result) {
                if (result.action) {
                    this.do_action(result.action);
                } else if (result.warning) {
                    this.do_warn(result.warning);
                }
            });
        },
        _getPositionError: function (error) {
            console.warn("You need allow this site to access your location to check-in or check-out");
        },
    });

});
