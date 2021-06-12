odoo.define('hr_attendance_geolocation.attendances_geolocation', function (require) {
    "use strict";

    var MyAttendances = require('hr_attendance.my_attendances');

    MyAttendances.include({
        init: function (parent, action) {
            this._super.apply(this, arguments);
            this.location = (null, null);
            this.errorCode = null;
        },
        update_attendance: function () {
            var self = this;
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(self._manual_attendance.bind(self), self._getPositionError, options);
            }
        },
        _manual_attendance: function (position) {
            var self = this;
            this._rpc({
                model: 'hr.employee',
                method: 'attendance_manual',
                args: [[self.employee.id], 'hr_attendance.hr_attendance_action_my_attendances', null, [position.coords.latitude, position.coords.longitude]],
            })
            .then(function(result) {
                if (result.action) {
                    self.do_action(result.action);
                } else if (result.warning) {
                    self.do_warn(result.warning);
                }
            });
        },
        _getPositionError: function (error) {
            console.warn('ERROR(${error.code}): ${error.message}');
        },
    });

});
