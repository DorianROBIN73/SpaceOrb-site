/* Fichier de réglages du site SpaceOrb.
   À remplir UNE SEULE FOIS. Les mises à jour de index.html ne le touchent pas. */
const CONFIG = {
  SUPABASE_URL: "https://ethjbizsqynlbfjgzgij.supabase.co",           // ex. https://xxxx.supabase.co (sans /rest/v1)
  SUPABASE_KEY: "sb_publishable_9HXqQ3gE6X8A0eJ3C7_v7g_LKNH1BUO",           // clé publishable (sb_publishable_…) ou anon
  FORMSPREE_ORDER: "",        // lien du formulaire de commande (à venir)
  FORMSPREE_IDEA: "",         // lien du formulaire d’idées (à venir)
  FIRMWARE_BUCKET: "firmware",
  FIRMWARE_FILE: "spaceorb-latest.uf2",
  USB_VENDOR_ID: null,        // null = toutes les cartes série sont proposées
  BAUD: 115200,
  CMD_HELLO: "HELLO",
  CMD_BOOTSEL: "BOOTSEL",
  TOUCH_1200: true            // redémarrage en mode mise à jour par « 1200 bauds »
};
