export function ContactFormScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  if (window.__helphubContatoBound) return;
  window.__helphubContatoBound = true;

  function digits(value) {
    return String(value || "").replace(/\\D/g, "");
  }

  function formatPhone(value) {
    var d = digits(value).slice(0, 11);
    if (d.length <= 2) return d.length ? "(" + d : "";
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }

  function show(el, on) {
    if (!el) return;
    if (on) el.removeAttribute("hidden");
    else el.setAttribute("hidden", "");
  }

  function mark(input, invalid) {
    if (!input) return;
    if (invalid) {
      input.setAttribute("aria-invalid", "true");
      input.classList.add("border-ink", "ring-1", "ring-ink");
    } else {
      input.removeAttribute("aria-invalid");
      input.classList.remove("border-ink", "ring-1", "ring-ink");
    }
  }

  function widgetOf(el) {
    return el && el.closest("[data-contato-widget]");
  }

  document.addEventListener("input", function (event) {
    var t = event.target;
    if (!t || !t.getAttribute) return;
    if (t.getAttribute("data-contato-phone") !== null) {
      t.value = formatPhone(t.value);
    }
    var root = widgetOf(t);
    if (!root || !t.name) return;
    var err = root.querySelector('[data-error-for="' + t.name + '"]');
    show(err, false);
    mark(t, false);
    var any = root.querySelector("[data-error-for]:not([hidden])");
    if (!any) show(root.querySelector("[data-contato-banner]"), false);
  });

  document.addEventListener("click", function (event) {
    var reset = event.target.closest("[data-contato-reset]");
    if (reset) {
      var resetRoot = widgetOf(reset);
      if (!resetRoot) return;
      show(resetRoot.querySelector("[data-contato-success]"), false);
      show(resetRoot.querySelector("[data-contato-fields]"), true);
      return;
    }

    var btn = event.target.closest("[data-testid=contato-enviar]");
    if (!btn) return;
    var root = widgetOf(btn);
    if (!root) return;

    var nome = root.querySelector('[name="nome"]');
    var telefone = root.querySelector('[name="telefone"]');
    var mensagem = root.querySelector('[name="mensagem"]');
    var errors = {
      nome: !nome || nome.value.trim().length < 2,
      telefone: digits(telefone && telefone.value).length < 10 || digits(telefone && telefone.value).length > 11,
      mensagem: !mensagem || mensagem.value.trim().length < 10,
    };

    var hasError = errors.nome || errors.telefone || errors.mensagem;
    show(root.querySelector('[data-error-for="nome"]'), errors.nome);
    show(root.querySelector('[data-error-for="telefone"]'), errors.telefone);
    show(root.querySelector('[data-error-for="mensagem"]'), errors.mensagem);
    mark(nome, errors.nome);
    mark(telefone, errors.telefone);
    mark(mensagem, errors.mensagem);
    show(root.querySelector("[data-contato-banner]"), hasError);

    if (hasError) {
      if (errors.nome && nome) nome.focus();
      else if (errors.telefone && telefone) telefone.focus();
      else if (mensagem) mensagem.focus();
      return;
    }

    if (nome) nome.value = "";
    if (telefone) telefone.value = "";
    if (mensagem) mensagem.value = "";
    show(root.querySelector("[data-contato-fields]"), false);
    show(root.querySelector("[data-contato-success]"), true);
  });
})();
        `,
      }}
    />
  );
}
