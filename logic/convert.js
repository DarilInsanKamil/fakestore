

function SliceZero({props}) {
    if (props) {
        var rupiah = "";
        var numberrev = props

            .toString()

            .split("")

            .reverse()

            .join("");

        for (var i = 0; i < numberrev.length; i++)

            if (i % 3 == 0) rupiah += numberrev.substr(i, 3) + ".";

        return (

            "$. " +

            rupiah

                .split("", rupiah.length - 1)

                .reverse()

                .join("")

        );

    } else {

        return props;

    }

}

export default SliceZero;