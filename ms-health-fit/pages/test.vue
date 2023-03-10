<template>
    <div>
      <header>
        <section>
          <h1>
            <a target='_blank' rel='noreferrer noopener' href='https://molamk.com/fingerprint'>
              Sneaky Fingerprint And IP Address Tracker
            </a>
          </h1>
          <p>
            This project is for educational purposes only. No data is being
            stored.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/molamk/fingerprint"
          >
            Check out the code on Github
          </a>
        </section>
      </header>
      <template v-if="ipData && fingerprint">
        <section>
            <table>
            <thead>
                <tr>
                <td>IP Data</td>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([key, value], idx) => (
                <tr key={idx}>
                    <td>{startCase(key)}</td>
                    <td>{value}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </section>
        <section>
            <table>
            <thead>
                <tr>
                <td>Fingerprint</td>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([key, value], idx) => (
                <tr key={idx}>
                    <td>{startCase(key)}</td>
                    <td>{value}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </section>
      </template>
      <template v-else>
        <section>
          <h2>Please wait...</h2>
        </section>
      </template>
      <footer>

      </footer>
    </div>
  </template>
  
  <script>

  
  export default {

    setup() {
      const fingerprint = ref(null);
      const ipData = ref(null);
      const showReport = ref(true);
  
      onMounted(() => {
        if (showReport.value) {
          fetch("https://extreme-ip-lookup.com/json")
            .then(res => res.json())
            .then(ip => Promise.all([ip, getFingerprint()]))
            .then(([ip, finger]) => {
              let f = finger
                .map(({ key, value }) => ({ [key]: value }))
                .reduce((acc, curr) => ({
                  ...acc,
                  ...curr
                }));
  
              f = cleanData(f);
              ip = cleanData(ip);
  
              fingerprint.value = f;
              ipData.value = ip;
              showReport.value = false;
            });
        }
      });
  
      useHead(() => ({
        title: 'Seanky fingerprint and IP tracker | molamk',
        meta: [
          {
            name: 'description',
            content: "Small React app to collect a device's fingerprint and IP address metadata"
          },
          {
            name: 'keywords',
            content: 'fingerprint,ip-address,tracker,react,privacy'
          }
        ]
      }));
  
      return {
        fingerprint,
        ipData,
        showReport
      }
    }
  }
  </script>
  