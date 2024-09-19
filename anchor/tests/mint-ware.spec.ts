import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { MintWare } from '../target/types/mint_ware';

describe('mint-ware', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.MintWare as Program<MintWare>;

  const mintWareKeypair = Keypair.generate();

  it('Initialize MintWare', async () => {
    await program.methods
      .initialize()
      .accounts({
        mintWare: mintWareKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([mintWareKeypair])
      .rpc();

    const currentCount = await program.account.mintWare.fetch(
      mintWareKeypair.publicKey
    );

    expect(currentCount.count).toEqual(0);
  });

  it('Increment MintWare', async () => {
    await program.methods
      .increment()
      .accounts({ mintWare: mintWareKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.mintWare.fetch(
      mintWareKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Increment MintWare Again', async () => {
    await program.methods
      .increment()
      .accounts({ mintWare: mintWareKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.mintWare.fetch(
      mintWareKeypair.publicKey
    );

    expect(currentCount.count).toEqual(2);
  });

  it('Decrement MintWare', async () => {
    await program.methods
      .decrement()
      .accounts({ mintWare: mintWareKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.mintWare.fetch(
      mintWareKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Set mintWare value', async () => {
    await program.methods
      .set(42)
      .accounts({ mintWare: mintWareKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.mintWare.fetch(
      mintWareKeypair.publicKey
    );

    expect(currentCount.count).toEqual(42);
  });

  it('Set close the mintWare account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        mintWare: mintWareKeypair.publicKey,
      })
      .rpc();

    // The account should no longer exist, returning null.
    const userAccount = await program.account.mintWare.fetchNullable(
      mintWareKeypair.publicKey
    );
    expect(userAccount).toBeNull();
  });
});
