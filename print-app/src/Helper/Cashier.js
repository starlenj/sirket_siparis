export function NakitHesapla(Nakit) {
  var Nakit = (
    parseFloat(Nakit.IkiYuz) * 200 +
    parseFloat(Nakit.Yuz) * 100 +
    parseFloat(Nakit.Elli) * 50 +
    parseFloat(Nakit.Yirmi) * 20 +
    parseFloat(Nakit.On) * 10 +
    parseFloat(Nakit.Bes) * 5 +
    parseFloat(Nakit.Bir) +
    parseFloat(Nakit.SifirBes) * 0.5 +
    parseFloat(Nakit.SifirYirmiBes) * 0.25 +
    parseFloat(Nakit.SifirBir) * 0.1 +
    parseFloat(Nakit.SifirSifirBes) * 0.05
  ).toFixed(2);
  return Nakit;
}
export function KrediKartiHesapla(Visa) {
  var VisaToplami = 0;
  VisaToplami = (
    parseFloat(Visa.Pos1) +
    parseFloat(Visa.Pos2) +
    parseFloat(Visa.Pos3) +
    parseFloat(Visa.Pos4) +
    parseFloat(Visa.Pos5) +
    parseFloat(Visa.Pos6) +
    parseFloat(Visa.Pos7)
  ).toFixed(2);
  return VisaToplami;
}
export function SodexoHesapla(Sodexo) {
  var SodexoToplami = 0;
  SodexoToplami = (
    parseFloat(Sodexo.IkiYuz) * 200 +
    parseFloat(Sodexo.Yuz) * 100 +
    parseFloat(Sodexo.Elli) * 50 +
    parseFloat(Sodexo.Yirmi) * 20 +
    parseFloat(Sodexo.On) * 10 +
    parseFloat(Sodexo.Bes) * 5 +
    parseFloat(Sodexo.Bir) +
    parseFloat(Sodexo.SifirBes) * 0.5 +
    parseFloat(Sodexo.SifirYirmiBes) * 0.25 +
    parseFloat(Sodexo.SifirBir) * 0.1 +
    parseFloat(Sodexo.SifirSifirBes) * 0.05
  ).toFixed(2);
  return SodexoToplami;
}

export function TicketHesapla(Ticket) {
  var TicketToplami = 0;

  TicketToplami = (
    parseFloat(Ticket.IkiYuz) * 200 +
    parseFloat(Ticket.Yuz) * 100 +
    parseFloat(Ticket.Elli) * 50 +
    parseFloat(Ticket.Yirmi) * 20 +
    parseFloat(Ticket.On) * 10 +
    parseFloat(Ticket.Bes) * 5 +
    parseFloat(Ticket.Bir) +
    parseFloat(Ticket.SifirBes) * 0.5 +
    parseFloat(Ticket.SifirYirmiBes) * 0.25 +
    parseFloat(Ticket.SifirBir) * 0.1 +
    parseFloat(Ticket.SifirSifirBes) * 0.05
  ).toFixed(2);
  return TicketToplami;
}
