import React from "react";
import { Query } from "react-apollo";
import {
  GET_ACTIVE_USER,
  GET_ONAYSIZ_ORDERS,
  GET_ADDED_ORDERS,
} from "../queries";
import Loading from "./Loading";

const sessionWrapperHOC = (Component) => (props) => {
  return (
    <Query query={GET_ACTIVE_USER}>
      {({ loading, subscribeToMore, data, refetch }) => {
        if (loading) return <Loading />;
        var path = window.location.pathname.split("/");
        if (data.ActiveUser === null && path[1] !== "login") {
          window.location.href = "/login";
          return;
        }
        if (data.ActiveUser !== null)
          subscribeToMore({
            document: GET_ADDED_ORDERS,
            variables: { SubeId: data.ActiveUser.Sube },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newItem = subscriptionData.data.OrderAdded;
              if (newItem) {
                localStorage.setItem("OrderId", newItem.id);

                const URL =
                  "https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg";
                var AudioContext =
                  window.AudioContext || // Default
                  window.webkitAudioContext || // Safari and old versions of Chrome
                  false;
                if (AudioContext) {
                  const context = new AudioContext();
                  let yodelBuffer;

                  if (Notification.permission === "granted") {
                    const Bildirim = new Notification("Sipariş Var", {
                      body: "Sipariş Var Lütfen Tıklayın",
                    });
                    Bildirim.onclick = (e) => {
                      window.location.href = "/OrderDetail";
                    };
                  } else if (Notification.permission === "denied") {
                    Notification.requestPermission().then((permission) => {
                      if (permission === "granted") {
                        const Bildirim = new Notification("Sipariş Var", {
                          body: "Sipariş Var Lütfen Tıklayın",
                        });
                        Bildirim.onclick = (e) => {
                          window.location.href = "/OrderDetail";
                        };
                      }
                    });
                  }

                  window
                    .fetch(URL)
                    .then((response) => response.arrayBuffer())
                    .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
                    .then((audioBuffer) => {
                      yodelBuffer = audioBuffer;
                      const source = context.createBufferSource();
                      source.buffer = audioBuffer;
                      source.connect(context.destination);
                      source.start(1);
                      source.stop(20);
                      setTimeout(
                        () => (window.location.href = "/OrderDetail"),
                        20000
                      );
                    })
                    .catch((error) => console.error(error));
                }
              }
            },
          });

        return <Component refetch={refetch} session={data} {...props} />;
      }}
    </Query>
  );
};

export default sessionWrapperHOC;
